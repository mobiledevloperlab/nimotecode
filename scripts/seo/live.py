#!/usr/bin/env python3
"""Read-only production checks. Reports contain URLs and metadata, never response bodies."""
import argparse
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from html.parser import HTMLParser
import json
import re
import subprocess
from pathlib import Path
from urllib.parse import urljoin, urlsplit
from xml.etree import ElementTree

SITE = "https://nimotecode.com"
CORE = ("/", "/features", "/pro", "/download", "/docs", "/docs/quick-start",
        "/docs/faq", "/releases/")
LOCALES = ("", "/zh", "/ja", "/ko", "/es")
BOTS = ("Googlebot", "bingbot", "OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot",
        "Claude-User", "PerplexityBot", "Perplexity-User")
LEGACY = ("/use-cases/remote-hotfix", "/use-cases/on-call-diagnostics", "/use-cases/ai-agent")
EXTERNAL = (
    "https://play.google.com/store/apps/details?id=com.nimote.nimotecode&hl=en&gl=US",
    "https://apps.apple.com/us/app/nimotecode-ai-code-ssh-ide/id6776158253",
    "https://github.com/mobiledevloperlab/nimotecode",
    "https://github.com/mobiledevloperlab/nimotehost",
)
NS = "{http://www.sitemaps.org/schemas/sitemap/0.9}"


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.title = ""
        self.in_title = False
        self.lang = ""
        self.canonical = []
        self.description = []
        self.alternates = {}
        self.robots = []
        self.links = set()
        self.schema = []
        self.in_schema = False
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.lang = attrs.get("lang", "")
        if tag == "title":
            self.in_title = True
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical.append(attrs.get("href"))
        if tag == "link" and "hreflang" in attrs:
            self.alternates[attrs["hreflang"]] = attrs.get("href")
        if tag == "meta" and attrs.get("name") == "description":
            self.description.append(attrs.get("content", ""))
        if tag == "meta" and attrs.get("name", "").lower() in ("robots", "googlebot", "bingbot"):
            self.robots.append(attrs.get("content", "").lower())
        if tag == "a" and attrs.get("href"):
            self.links.add(attrs["href"])
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.schema.append("")
            self.in_schema = True

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag == "script":
            self.in_schema = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_schema:
            self.schema[-1] += data


def get_once(url, ua):
    # Use curl consistently in local and CI environments. Disable user curlrc
    # and redirects. The URL inventory is fixed or constrained to SITE.
    result = subprocess.run(
        ["curl", "-q", "--silent", "--compressed", "--include", "--suppress-connect-headers",
         "--max-filesize", "2500000", "--max-time", "10", "--user-agent", ua, "--", url],
        capture_output=True,
    )
    raw = result.stdout
    while raw.startswith(b"HTTP/"):
        head, separator, raw = raw.partition(b"\r\n\r\n")
        if not separator:
            break
        status_line, *lines = head.decode("iso-8859-1").split("\r\n")
        status = int(status_line.split()[1])
        if status < 200:
            continue
        headers = {}
        for line in lines:
            key, _, value = line.partition(":")
            headers[key.lower()] = value.strip()
        if result.returncode != 0 or len(raw) > 2_500_000:
            break
        return status, headers, raw.decode("utf-8", "replace")
    return 0, {}, ""

def get(url, ua="NimoteCode-Site-Monitor/1.0"):
    response = get_once(url, ua)
    if response[0] == 0 or response[0] >= 500:
        return get_once(url, ua)
    return response


def path_url(url):
    parsed = urlsplit(url)
    return SITE + (parsed.path or "/") if (parsed.scheme, parsed.netloc) == ("https", "nimotecode.com") else None


def absolute(href):
    url = urljoin(SITE + "/", href)
    return SITE + "/" if url == SITE else url


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--weekly", action="store_true")
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    failures = []
    report = {"time": datetime.now(timezone.utc).isoformat(), "mode": "weekly" if args.weekly else "daily",
              "failures": failures}
    robots_status, _, robots = get(SITE + "/robots.txt")
    sitemap_status, _, sitemap = get(SITE + "/sitemap.xml")
    report["robotsStatus"], report["sitemapStatus"] = robots_status, sitemap_status
    # Production policy is an allow-all public site. Detect policy drift rather
    # than incorrectly interpreting overlapping robots groups.
    if robots_status != 200 or not any(
        line.partition("#")[0].strip().casefold() == f"sitemap: {SITE}/sitemap.xml"
        for line in robots.splitlines()
    ) or any(line.startswith("disallow:") and line.partition(":")[2].strip()
             for line in (line.partition("#")[0].strip().casefold() for line in robots.splitlines())):
        failures.append("robots.txt differs from the public crawl policy")
    try:
        tree = ElementTree.fromstring(sitemap)
        urls = [node.text for node in tree.findall(f"{NS}url/{NS}loc")]
    except ElementTree.ParseError:
        urls = []
    sitemap_urls = {url for url in urls if url and path_url(url) == url}
    if sitemap_status != 200 or not sitemap_urls or len(sitemap_urls) != len(urls):
        failures.append("sitemap unavailable, invalid, duplicated, or contains noncanonical origins")
    core = {SITE + locale + route for locale in LOCALES for route in CORE}
    if core - sitemap_urls:
        failures.extend(f"Core page missing from sitemap: {url}" for url in sorted(core - sitemap_urls))
    selected = sitemap_urls if args.weekly else core
    # Bound network work even when the sitemap or link inventory changes.
    if len(selected) > 1500:
        failures.append("URL inventory exceeded the audit limit")
    selected = sorted(selected)[:1500]
    pages = {}
    report["pages"] = {}
    print(f"Checking {len(selected)} public pages", flush=True)
    with ThreadPoolExecutor(max_workers=12) as pool:
        for url, (status, headers, html) in zip(selected, pool.map(get, selected)):
            result = report["pages"][url] = {"status": status, "bytes": len(html.encode())}
            if status != 200 or "text/html" not in headers.get("content-type", ""):
                failures.append(f"Indexable page returned {status} or non-HTML: {url}")
                continue
            page = pages[url] = Page(html)
            result.update(lang=page.lang, canonical=page.canonical)
            normalized = [absolute(value) for value in page.canonical if value]
            page.lang = {"en": "en-US", "zh": "zh-CN"}.get(page.lang, page.lang)
            if normalized != [url] or not page.title.strip() or len(page.description) != 1 or not page.description[0].strip():
                failures.append(f"Missing metadata or non-self canonical: {url}")
            if "noindex" in " ".join(page.robots + [headers.get("x-robots-tag", "").lower()]):
                failures.append(f"Indexable page marked noindex: {url}")
            try:
                for block in page.schema:
                    json.loads(block)
            except ValueError:
                failures.append(f"Invalid JSON-LD: {url}")

        for url, page in pages.items():
            for locale, target in page.alternates.items():
                alternate = absolute(target or "")
                if alternate not in sitemap_urls:
                    failures.append(f"hreflang {locale} outside sitemap: {url} -> {alternate}")
                elif locale != "x-default" and alternate in pages:
                    back = pages[alternate].alternates.get(page.lang)
                    if pages[alternate].lang != locale or not back or absolute(back) != url:
                        failures.append(f"hreflang {locale} is not reciprocal: {url} -> {alternate}")

        print(f"Fetched {len(pages)} HTML pages", flush=True)
        targets = {path_url(urljoin(url, link)) for url, page in pages.items() for link in page.links}
        targets.discard(None)
        # Sitemap pages already fetched need no duplicate request.
        unchecked = sorted(targets - set(selected))
        if len(unchecked) > 500:
            failures.append("Internal link inventory exceeded the audit limit")
        report["linkedStatus"] = {}
        for url, (status, headers, _) in zip(unchecked[:500], pool.map(get, unchecked[:500])):
            destination = urljoin(url, headers["location"]) if "location" in headers else None
            report["linkedStatus"][url] = {"status": status, "location": destination}
            target = path_url(destination) if destination else None
            if status != 200 and not (status in (301, 302, 307, 308) and target in sitemap_urls):
                failures.append(f"Internal link returned {status}: {url}")

        auxiliary = [SITE + "/llms.txt", SITE + "/llms-full.txt", SITE + "/seo-monitor-not-found-probe"]
        report["auxiliary"] = {}
        for url, (status, headers, body) in zip(auxiliary, pool.map(get, auxiliary)):
            report["auxiliary"][url] = status
            if url.endswith(".txt"):
                if status != 200 or not headers.get("content-type", "").startswith("text/plain") or not body.startswith("# NimoteCode"):
                    failures.append(f"AI reference returned invalid content: {url}")
                for target in re.findall(r"\]\((https://nimotecode\.com/[^\s)]+)\)", body):
                    if path_url(target) not in sitemap_urls and path_url(target) != SITE + "/llms-full.txt":
                        failures.append(f"AI reference links outside the sitemap: {target}")
            elif status != 404:
                failures.append(f"Missing route returned {status}: {url}")

        if args.weekly:
            report["legacyRedirects"] = {}
            legacy_urls = [SITE + locale + old for locale in ("", "/zh") for old in LEGACY]
            for url, (status, headers, _) in zip(legacy_urls, pool.map(get, legacy_urls)):
                report["legacyRedirects"][url] = {"status": status, "location": headers.get("location")}
            report["externalStatus"] = {
                url: status for url, (status, _, _) in zip(EXTERNAL, pool.map(get, EXTERNAL))
            }
            report["unverifiedUserAgents"] = {
                bot: status for bot, (status, _, _) in zip(BOTS, pool.map(lambda bot: get(SITE + "/", bot), BOTS))
            }
    report["sitemapCount"] = len(sitemap_urls)
    report["localeCounts"] = dict(Counter(page.lang for page in pages.values()))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(f"{len(pages)}/{len(selected)} HTML pages, {len(sitemap_urls)} sitemap URLs, "
          f"{len(failures)} findings. Report: {args.output}")
    for finding in failures[:20]:
        print(finding)
    return bool(failures)


if __name__ == "__main__":
    raise SystemExit(main())
