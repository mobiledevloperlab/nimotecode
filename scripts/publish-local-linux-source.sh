#!/usr/bin/env bash
#
# Publish the NimoteCode Local Linux complete corresponding-source bundle.
#
# The source archive is several hundred megabytes. It must never enter the Git
# repository or the Pages build artifact, so this script keeps the archive
# outside docs/public, uploads it to Cloudflare R2 and promotes the lightweight
# release metadata (checksums, manifests, provenance, notices) that the website
# and the Android source-delivery metadata point at.
#
# Usage:
#   ./scripts/publish-local-linux-source.sh <version>
#
# Everything is fail-closed: metadata is staged first and only promoted into
# the live website tree once every earlier step succeeded, so a failed or
# interrupted run never overwrites metadata that is already published.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# ---------------------------------------------------------------- defaults --

PUBLISH_DIR="$SITE_ROOT/docs/public/opensource/local-linux"
ARCHIVE_STORE="${SOURCE_BUNDLES_DIR:-$SITE_ROOT/source-bundles/local-linux}"
STAGING_ROOT="$SITE_ROOT/.local-linux-source-staging"
BACKUP_ROOT="$SITE_ROOT/.local-linux-source-backup"

# Where the archive is served from once it is uploaded to R2.
SOURCE_BASE_URL="${LOCAL_LINUX_SOURCE_BASE_URL:-https://opensource-downloads.nimotecode.com/local-linux}"
SITE_URL="${NIMOTECODE_SITE_URL:-https://nimotecode.com}"
R2_BUCKET="${R2_BUCKET:-nimotecode-opensource}"
R2_PREFIX="${R2_PREFIX:-local-linux}"

# Optional: the application repository that owns the Local Linux build chain.
BUILD_REPO="${NIMOTECODE_REPO:-$SITE_ROOT/../nimotecode}"

# Public source entry points quoted in the published metadata.
SOURCE_REPO_URL="${LOCAL_LINUX_SOURCE_REPO_URL:-https://github.com/mobiledevloperlab/nimotecode}"
SOURCE_REPO_BRANCH="${LOCAL_LINUX_SOURCE_REPO_BRANCH:-main}"

CONTENT_TYPE="application/zstd"
CACHE_CONTROL="public, max-age=31536000, immutable"

# ----------------------------------------------------------------- options --

version=""
archive=""
skip_upload=0
allow_unpublished=0
allow_build=1
keep_archive=0
relocate_archive=0
verify_download=0
refresh=0
dry_run=0
wrangler_bin="${WRANGLER:-}"
uploader="${UPLOADER:-auto}"

# `wrangler r2 object put` rejects anything above this; a Local Linux bundle is
# larger, so it goes through the S3 multipart uploader instead.
WRANGLER_MAX_BYTES=$((300 * 1024 * 1024))

usage() {
  sed -n '3,15p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'
  cat <<'EOF'

Options:
  --archive PATH        Use this tar.zst instead of discovering or building one.
  --no-build            Fail when no archive exists instead of building one.
  --skip-upload         Stage metadata only; never touches R2 or the live tree.
  --allow-unpublished   Promote live metadata even though no upload happened.
                        For local preview: the download URL is then not live.
  --relocate-archive    Move the archive out of docs/public/ without an upload.
                        Only for an archive that is not publicly served yet.
  --keep-archive        Leave the archive where it is, even after an upload.
  --verify-download     Download the uploaded object and compare its SHA-256.
  --refresh             The release is already live: verify the uploaded object
                        still matches this archive and rewrite the metadata
                        without uploading the archive again.
  --bucket NAME         R2 bucket (default: $R2_BUCKET).
  --base-url URL        Public download base URL.
  --wrangler PATH       Wrangler executable to use.
  --uploader MODE       auto (default), wrangler or s3. A Local Linux bundle is
                        larger than wrangler's 300 MiB limit, so auto prefers the
                        S3 multipart uploader whenever R2 S3 credentials are set.
  --credentials PATH    Source Cloudflare credentials from this file (mode 600,
                        outside the repository) before uploading.
  --dry-run             Validate and report; publish nothing.

Environment:
  LOCAL_LINUX_SOURCE_BASE_URL   Public base URL for the release directory.
  R2_BUCKET, R2_PREFIX          R2 destination.
  NIMOTECODE_REPO               Repo holding the Local Linux build chain.
  SOURCE_BUNDLES_DIR            Where archives live outside the website tree.
  CLOUDFLARE_CREDENTIALS_FILE   File to source for the credentials below.
  CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID
                                Cloudflare API credentials used by wrangler.
  R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY
                                R2 S3 credentials used by the multipart uploader.
                                Required for archives over wrangler's 300 MiB cap.
  R2_ENDPOINT                   Override the derived S3 endpoint.
  UPLOADER                      Same as --uploader.
EOF
}

log()  { printf '%s\n' "$*"; }
step() { printf '\n==> %s\n' "$*"; }
die()  { printf 'FAIL: %s\n' "$*" >&2; exit 1; }

while (($#)); do
  case "$1" in
    --archive)           archive="${2:?--archive needs a path}"; shift 2 ;;
    --no-build)          allow_build=0; shift ;;
    --skip-upload)       skip_upload=1; shift ;;
    --allow-unpublished) allow_unpublished=1; shift ;;
    --relocate-archive)  relocate_archive=1; shift ;;
    --keep-archive)      keep_archive=1; shift ;;
    --verify-download)   verify_download=1; shift ;;
    --refresh)           refresh=1; shift ;;
    --bucket)            R2_BUCKET="${2:?--bucket needs a name}"; shift 2 ;;
    --base-url)          SOURCE_BASE_URL="${2:?--base-url needs a URL}"; shift 2 ;;
    --wrangler)          wrangler_bin="${2:?--wrangler needs a path}"; shift 2 ;;
    --uploader)          uploader="${2:?--uploader needs auto, wrangler or s3}"; shift 2 ;;
    --credentials)       CLOUDFLARE_CREDENTIALS_FILE="${2:?--credentials needs a path}"; shift 2 ;;
    --dry-run)           dry_run=1; shift ;;
    -h|--help)           usage; exit 0 ;;
    -*)                  usage >&2; die "unknown option: $1" ;;
    *)                   [[ -z "$version" ]] || die "unexpected argument: $1"; version="$1"; shift ;;
  esac
done

[[ -n "$version" ]] || { usage >&2; exit 2; }
[[ "$version" =~ ^[0-9]+\.[0-9]+(\.[0-9]+)?([-+][0-9A-Za-z.-]+)?$ ]] \
  || die "version '$version' is not a release version (expected e.g. 1.1.7)"
[[ "$SOURCE_BASE_URL" =~ ^https:// ]] || die "--base-url must be an https URL"
case "$SOURCE_BASE_URL" in
  *localhost*|*placeholder*|*/latest*|*/current/*) die "--base-url must be stable and public: $SOURCE_BASE_URL" ;;
esac

SOURCE_BASE_URL="${SOURCE_BASE_URL%/}"
FILENAME="nimotecode-local-linux-sources-$version.tar.zst"
DOWNLOAD_URL="$SOURCE_BASE_URL/$version/$FILENAME"
RELEASE_BASE_URL="$SITE_URL/opensource/local-linux/$version"
RELEASE_DIR="$PUBLISH_DIR/$version"
OBJECT_KEY="$R2_PREFIX/$version/$FILENAME"
STAGING="$STAGING_ROOT/$version"

for tool in tar sha256sum python3 curl; do
  command -v "$tool" >/dev/null || die "required tool not found: $tool"
done
tar --zstd --help >/dev/null 2>&1 || die "tar does not support --zstd (install zstd)"

# ------------------------------------------------------- 1. find the archive --

find_archive() {
  local candidates=(
    "$ARCHIVE_STORE/$FILENAME"
    "$SITE_ROOT/dist/local-linux-sources/$FILENAME"
    "$BUILD_REPO/dist/local-linux-sources/$FILENAME"
    "$RELEASE_DIR/$FILENAME"
  )
  local candidate
  for candidate in "${candidates[@]}"; do
    if [[ -f "$candidate" ]]; then printf '%s\n' "$candidate"; return 0; fi
  done
  return 1
}

build_archive() {
  local builder="$BUILD_REPO/scripts/local-linux/build-source-release.py"
  [[ -f "$builder" ]] || die "no archive for $version and no Local Linux build chain at $BUILD_REPO"
  step "Building the source bundle with the existing Local Linux build chain"
  log "builder: $builder"
  log "reuses the checked build inputs in $BUILD_REPO/build/local-linux-source-bundle"
  log "and refreshes the application's android/local_linux/assets/local_linux/source-delivery.json"
  # The delivery record points at the website page that describes the release,
  # which is readable; the archive's own URL is recorded separately because it
  # is served from object storage.
  python3 "$builder" --version "$version" \
    --website-url "$RELEASE_BASE_URL/" \
    --download-url "$DOWNLOAD_URL" >&2
  printf '%s\n' "$BUILD_REPO/dist/local-linux-sources/$FILENAME"
}

step "Publishing NimoteCode Local Linux corresponding source $version"
log "live metadata : $RELEASE_DIR"
log "archive store : $ARCHIVE_STORE"
log "download URL  : $DOWNLOAD_URL"
log "R2 object     : $R2_BUCKET/$OBJECT_KEY"

if [[ -n "$archive" ]]; then
  [[ -f "$archive" ]] || die "--archive does not exist: $archive"
elif ! archive="$(find_archive)"; then
  (( allow_build )) || die "no archive for $version found; build it first or drop --no-build"
  archive="$(build_archive)"
fi
archive="$(cd "$(dirname "$archive")" && pwd)/$(basename "$archive")"
[[ -f "$archive" ]] || die "archive missing after resolution: $archive"
log "archive       : $archive"

# ---------------------------------------------------------- 2. validate it --

step "Validating the archive"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

tar --zstd -tf "$archive" > "$TMP/list.txt" || die "archive is not a readable tar.zst: $archive"
[[ -s "$TMP/list.txt" ]] || die "archive is empty: $archive"

mapfile -t roots < <(awk -F/ 'NF>=2 && $2!="" {print $1}' "$TMP/list.txt" | sort -u)
[[ "${#roots[@]}" -eq 1 ]] || die "archive must have exactly one root directory, found: ${roots[*]:-none}"
root="${roots[0]}"
[[ "$root" == "$version" ]] \
  || die "archive root '$root' does not match version '$version' (refusing a mislabelled release)"

for required in README.md THIRD_PARTY_SOURCE.md source-manifest.json manifests/ notices/ sources/; do
  if ! grep -qx "$root/$required" "$TMP/list.txt" && ! grep -q "^$root/$required" "$TMP/list.txt"; then
    die "archive is missing required entry: $required"
  fi
done
for required in rootfs-provenance-arm64.json rootfs-provenance-amd64.json; do
  grep -qx "$root/$required" "$TMP/list.txt" || die "archive is missing $required"
done

# VCS metadata, dependency trees and device cruft must never be published.
forbidden="$(grep -nE '(^|/)(\.git|\.dart_tool|node_modules)(/|$)|(^|/)(\.DS_Store|Thumbs\.db)$' "$TMP/list.txt" || true)"
[[ -z "$forbidden" ]] || { printf '%s\n' "$forbidden" >&2; die "archive contains forbidden paths"; }
toplevel="$(grep -nE "^$root/build(/|$)" "$TMP/list.txt" || true)"
[[ -z "$toplevel" ]] || { printf '%s\n' "$toplevel" >&2; die "archive contains a top-level build/ directory"; }

# The bundle names its own release in several independent places; refuse to
# publish a filename that disagrees with the bytes it points at.
tar --zstd -xOf "$archive" "$root/README.md" > "$TMP/README.md" \
  || die "cannot read $root/README.md from the archive"
declared="$(sed -n 's/^Release: //p' "$TMP/README.md" | head -1)"
[[ "$declared" == "$version" ]] \
  || die "bundle README declares release '$declared' but '$version' was requested"
log "bundle root, README and filename all agree on version $version"

source_packages="$(awk -F/ -v r="$root" '$1==r && $2=="sources" && $3!="" {print $3}' "$TMP/list.txt" | sort -u | wc -l)"
(( source_packages > 0 )) || die "archive carries no sources/ packages"
log "corresponding-source packages in bundle: $source_packages"

# --------------------------------------------------------- 3. checksums ----

step "Computing checksum and size"
size="$(stat -c%s "$archive")"
sha="$(sha256sum "$archive" | cut -d' ' -f1)"
log "size   : $size bytes"
log "sha256 : $sha"

# A published checksum is the release of record. Re-tarring an already released
# version produces different bytes, so stop rather than displace it silently.
if [[ -f "$RELEASE_DIR/SHA256SUMS" ]]; then
  published="$(awk -v f="$FILENAME" '$2==f {print $1}' "$RELEASE_DIR/SHA256SUMS" | head -1)"
  if [[ -n "$published" && "$published" != "$sha" ]]; then
    die "local archive sha256 $sha does not match the published $published for $version.
Re-tarring an already published release changes its bytes: reuse the published
archive (--archive PATH) or publish this build under a new version."
  fi
fi

# ------------------------------------------------------ 4. stage metadata ----

step "Staging release metadata"
rm -rf "$STAGING"
mkdir -p "$STAGING/licenses" "$STAGING/manifests" "$STAGING/provenance" "$STAGING/checksums"

tar --zstd -xf "$archive" -C "$STAGING" --strip-components=1 \
  "$root/notices" "$root/manifests/ubuntu-source-artifacts.json" \
  || die "cannot extract notices/manifests from the archive"
[[ -f "$STAGING/manifests/ubuntu-source-artifacts.json" ]] \
  || die "archive has no manifests/ubuntu-source-artifacts.json"

for arch in arm64 amd64; do
  tar --zstd -xOf "$archive" "$root/rootfs-provenance-$arch.json" \
    > "$STAGING/provenance/rootfs-provenance-$arch.json" \
    || die "cannot extract rootfs-provenance-$arch.json"
done

# Package inventories come from the bundle's own notices: they are the evidence
# that every shipped binary has a matching corresponding-source artifact.
for name in packages.tsv packages-amd64.tsv manifest.json manifest-amd64.json; do
  [[ -f "$STAGING/notices/$name" ]] && cp "$STAGING/notices/$name" "$STAGING/manifests/$name"
done
cp "$STAGING/notices/THIRD_PARTY_NOTICES" "$STAGING/licenses/THIRD_PARTY_NOTICES"
[[ -f "$STAGING/notices/THIRD_PARTY_NOTICES-amd64" ]] \
  && cp "$STAGING/notices/THIRD_PARTY_NOTICES-amd64" "$STAGING/licenses/THIRD_PARTY_NOTICES-amd64"
[[ -f "$STAGING/notices/source-delivery.json" ]] \
  && cp "$STAGING/notices/source-delivery.json" "$STAGING/provenance/app-source-delivery.json"
[[ -f "$STAGING/notices/source-manifest-lite.json" ]] \
  || die "archive has no notices/source-manifest-lite.json"

# The source manifest is the compliance record of what this bundle answers for;
# a mismatch with what is already published means the release moved underneath.
if [[ -f "$RELEASE_DIR/source-manifest.json" ]]; then
  cmp -s "$RELEASE_DIR/source-manifest.json" "$STAGING/notices/source-manifest-lite.json" \
    || die "published source-manifest.json does not match this bundle"
fi
cp "$STAGING/notices/source-manifest-lite.json" "$STAGING/source-manifest.json"

# PRoot and talloc ship as separate executables; their corresponding source is
# kept in the application repository, not inside the Ubuntu bundle.
proot_assets="$BUILD_REPO/android/proot/assets"
if [[ -d "$proot_assets/licenses" ]]; then
  find "$proot_assets/licenses" -maxdepth 1 -name '*.txt' -exec cp {} "$STAGING/licenses/" \;
  [[ -f "$proot_assets/licenses/proot-corresponding-source.tgz" ]] \
    && cp "$proot_assets/licenses/proot-corresponding-source.tgz" "$STAGING/licenses/"
  [[ -f "$proot_assets/runtime-build.json" ]] \
    && cp "$proot_assets/runtime-build.json" "$STAGING/provenance/runtime-build.json"
else
  log "note: no PRoot assets at $proot_assets; publishing the Ubuntu bundle alone"
fi

if [[ -f "$RELEASE_DIR/THIRD_PARTY_SOURCE.md" ]]; then
  cp "$RELEASE_DIR/THIRD_PARTY_SOURCE.md" "$STAGING/THIRD_PARTY_SOURCE.md"
elif [[ -f "$BUILD_REPO/docs/local-linux/THIRD_PARTY_SOURCE.md" ]]; then
  cp "$BUILD_REPO/docs/local-linux/THIRD_PARTY_SOURCE.md" "$STAGING/THIRD_PARTY_SOURCE.md"
else
  die "cannot find THIRD_PARTY_SOURCE.md"
fi

printf '%s  %s\n' "$sha" "$FILENAME" > "$STAGING/SHA256SUMS"

# The download page reads this file to render version, size, checksum and link.
python3 - "$STAGING" "$version" "$FILENAME" "$size" "$sha" "$DOWNLOAD_URL" \
  "$RELEASE_BASE_URL" "$OBJECT_KEY" "$SOURCE_REPO_URL" "$SOURCE_REPO_BRANCH" \
  > "$STAGING/source-download.json" <<'PY' \
  || die "could not derive release metadata from the bundle"
import json, os, re, sys

staging, version, filename, size, sha = sys.argv[1:6]
download_url, release_url, object_key, repo_url, repo_branch = sys.argv[6:11]

with open(os.path.join(staging, 'manifests', 'manifest.json')) as handle:
    rootfs = json.load(handle)
name = rootfs.get('name', 'Ubuntu')
release = rootfs.get('version', '')

# Every April release in an even year is an Ubuntu LTS.
lts = ''
parts = release.split('.')
if len(parts) >= 2 and parts[1] == '04' and parts[0].isdigit() and int(parts[0]) % 2 == 0:
    lts = ' LTS'
distribution = f'{name} {release}{lts}'.strip()

architectures = []
for entry in sorted(os.listdir(os.path.join(staging, 'provenance'))):
    match = re.match(r'rootfs-provenance-([a-z0-9_]+)\.json$', entry)
    if not match:
        continue
    with open(os.path.join(staging, 'provenance', entry)) as handle:
        arch = json.load(handle).get('architecture', match.group(1))
    if arch not in architectures:
        architectures.append(arch)

order = {'arm64': 0, 'amd64': 1}
architectures.sort(key=lambda arch: (order.get(arch, 9), arch))
if not architectures:
    raise SystemExit('no rootfs provenance found: cannot determine architectures')

json.dump({
    'product': 'NimoteCode Local Linux',
    'version': version,
    'distribution': distribution,
    'architectures': architectures,
    'filename': filename,
    'size': int(size),
    'sha256': sha,
    'downloadUrl': download_url,
    'sourceAvailable': True,
    'published': False,
    'objectKey': object_key,
    'releaseUrl': release_url,
    'checksumsUrl': f'{release_url}/SHA256SUMS',
    'manifestUrl': f'{release_url}/source-manifest.json',
    'licensesUrl': f'{release_url}/licenses/',
    'provenanceUrl': f'{release_url}/provenance/',
    'repositoryUrl': repo_url,
    'metadataRepositoryUrl': f'{repo_url}/tree/{repo_branch}/docs/public/opensource/local-linux/{version}',
    'buildScriptUrl': f'{repo_url}/blob/{repo_branch}/scripts/publish-local-linux-source.sh',
}, sys.stdout, indent=2)
sys.stdout.write('\n')
PY

python3 - "$STAGING/source-download.json" <<'PY' || die "generated source-download.json is invalid"
import json, sys
data = json.load(open(sys.argv[1]))
required = ('product', 'version', 'distribution', 'architectures', 'filename',
            'size', 'sha256', 'downloadUrl', 'sourceAvailable')
missing = [key for key in required if key not in data]
if missing:
    raise SystemExit(f'missing fields: {missing}')
if not str(data['downloadUrl']).startswith('https://'):
    raise SystemExit('downloadUrl must be https')
PY

# A self-describing landing page for the version directory, so the published
# tree explains itself without the surrounding website.
python3 - "$STAGING/source-download.json" > "$STAGING/README.md" <<'PY'
import json, sys
data = json.load(open(sys.argv[1]))
print(f"""# NimoteCode Local Linux corresponding source {data['version']}

Complete corresponding source for the third-party components of the Ubuntu
root filesystem bundled with NimoteCode Local Linux {data['version']}.
It does not contain NimoteCode proprietary application source.

| | |
| -- | -- |
| Product | {data['product']} |
| Version | {data['version']} |
| Distribution | {data['distribution']} |
| Architectures | {', '.join(data['architectures'])} |

## Download

* File: `{data['filename']}`
* Size: {data['size']} bytes
* SHA-256: `{data['sha256']}`
* URL: {data['downloadUrl']}

The archive is hosted outside this website. Verify it after downloading:

```sh
curl -O {data['downloadUrl']}
sha256sum {data['filename']}
```

## Metadata in this directory

* `SHA256SUMS` — checksum of the source bundle.
* `checksums/SHA256SUMS` — checksums of every file in `licenses/`, `manifests/` and `provenance/`.
* `source-manifest.json` — the source packages this bundle answers for.
* `manifests/` — package inventories and the fetched source artifacts.
* `provenance/` — rootfs provenance and recorded build inputs.
* `licenses/` — third-party notices and licence texts.
* `THIRD_PARTY_SOURCE.md` — scope of this corresponding-source delivery.
""")
PY
[[ -s "$STAGING/README.md" ]] || die "could not write the release README"

# The raw notices tree is staging input; its contents are published under
# licenses/, manifests/ and provenance/.
rm -rf "$STAGING/notices"
log "staged metadata:"
(cd "$STAGING" && find . -type f | sed 's|^\./|  |' | sort)

# ------------------------------------------------------------ 5. upload ----

uploaded=0
refreshed=0
if (( skip_upload || dry_run )); then
  step "Skipping the Cloudflare R2 upload"
  log "$([[ $dry_run == 1 ]] && echo '--dry-run' || echo '--skip-upload') requested; nothing was uploaded."
elif (( refresh )); then
  step "Verifying the already published object"
  [[ -f "$RELEASE_DIR/source-download.json" ]] \
    || die "--refresh needs an already published release: $RELEASE_DIR/source-download.json is missing"
  python3 -c 'import json,sys
data = json.load(open(sys.argv[1]))
if not data.get("published"):
    sys.exit("that release is not published yet")
if data.get("sha256") != sys.argv[2] or str(data.get("size")) != sys.argv[3]:
    sys.exit("the published release does not describe this archive")' \
    "$RELEASE_DIR/source-download.json" "$sha" "$size" \
    || die "--refresh refused: $RELEASE_DIR/source-download.json does not describe this archive"
  remote_size="$(curl -sSLI --max-time 60 "$DOWNLOAD_URL" \
    | tr -d '\r' | awk 'tolower($1)=="content-length:" {print $2}' | tail -1)"
  [[ "$remote_size" == "$size" ]] \
    || die "the published object is not reachable at $DOWNLOAD_URL (got '${remote_size:-nothing}')"
  log "published object still matches: $DOWNLOAD_URL -> $remote_size bytes"
  refreshed=1
else
  step "Uploading to Cloudflare R2 ($R2_BUCKET/$OBJECT_KEY)"

  # Credentials live outside the repository. The file is only read, never
  # written, and only when it is explicitly pointed at.
  if [[ -n "${CLOUDFLARE_CREDENTIALS_FILE:-}" ]]; then
    [[ -f "$CLOUDFLARE_CREDENTIALS_FILE" ]] \
      || die "credentials file does not exist: $CLOUDFLARE_CREDENTIALS_FILE"
    set -a
    # shellcheck disable=SC1090
    source "$CLOUDFLARE_CREDENTIALS_FILE"
    set +a
    log "loaded Cloudflare credentials from $CLOUDFLARE_CREDENTIALS_FILE"
  fi

  upload_with_wrangler() {
    if [[ -z "$wrangler_bin" ]]; then
      if [[ -x "$SITE_ROOT/node_modules/.bin/wrangler" ]]; then
        wrangler_bin="$SITE_ROOT/node_modules/.bin/wrangler"
      elif command -v wrangler >/dev/null; then
        wrangler_bin="$(command -v wrangler)"
      fi
    fi
    [[ -n "$wrangler_bin" ]] \
      || die "wrangler not found. Install it (npm i -D wrangler) or pass --wrangler PATH."
    [[ -n "${CLOUDFLARE_API_TOKEN:-}${CLOUDFLARE_API_KEY:-}" ]] \
      || die "no Cloudflare credentials in this shell. Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID, or run 'wrangler login'."
    log "uploader: wrangler ($("$wrangler_bin" --version 2>/dev/null | tail -1))"

    # Wrangler 4 defaults r2 object commands to the local simulator.
    local -a remote_flag=()
    "$wrangler_bin" r2 object put --help 2>&1 | grep -q -- '--remote' && remote_flag=(--remote)

    # Wrangler can fail to exit after a completed upload, so its exit status is
    # not the gate: the HEAD check that follows decides whether the object is
    # really there, and nothing is published until that passes.
    if ! timeout 1800 "$wrangler_bin" r2 object put "$R2_BUCKET/$OBJECT_KEY" \
        --file "$archive" \
        --content-type "$CONTENT_TYPE" \
        --cache-control "$CACHE_CONTROL" \
        ${remote_flag[@]+"${remote_flag[@]}"}; then
      log "wrangler did not report success; verifying the object before publishing"
    fi
  }

  upload_with_s3() {
    [[ -n "${R2_ACCESS_KEY_ID:-}" && -n "${R2_SECRET_ACCESS_KEY:-}" ]] \
      || die "the S3 uploader needs R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY."
    log "uploader: scripts/r2-upload.py (S3 multipart)"
    python3 "$SITE_ROOT/scripts/r2-upload.py" "$archive" \
      --bucket "$R2_BUCKET" \
      --key "$OBJECT_KEY" \
      --account-id "${R2_ACCOUNT_ID:-${CLOUDFLARE_ACCOUNT_ID:-}}" \
      --endpoint "${R2_ENDPOINT:-}" \
      --content-type "$CONTENT_TYPE" \
      --cache-control "$CACHE_CONTROL"
  }

  case "$uploader" in
    auto)     if [[ -n "${R2_ACCESS_KEY_ID:-}" && -n "${R2_SECRET_ACCESS_KEY:-}" ]]; then
                upload_with_s3 || die "R2 upload failed; live metadata was left untouched"
              elif (( size > WRANGLER_MAX_BYTES )); then
                die "the archive is $(( (size + 1048575) / 1048576 )) MiB but wrangler only uploads up to 300 MiB.
Add R2 S3 credentials to the credentials file so the multipart uploader can be used:
  R2_ACCESS_KEY_ID=...      # R2 dashboard -> Manage R2 API Tokens -> Object Read & Write
  R2_SECRET_ACCESS_KEY=...
  CLOUDFLARE_ACCOUNT_ID=..."
              else
                upload_with_wrangler || die "R2 upload failed; live metadata was left untouched"
              fi ;;
    wrangler) upload_with_wrangler || die "R2 upload failed; live metadata was left untouched" ;;
    s3)       upload_with_s3 || die "R2 upload failed; live metadata was left untouched" ;;
    *)        die "--uploader must be auto, wrangler or s3 (got: $uploader)" ;;
  esac

  step "Verifying the uploaded object"
  remote_size="$(curl -sSLI --max-time 60 "$DOWNLOAD_URL" \
    | tr -d '\r' | awk 'tolower($1)=="content-length:" {print $2}' | tail -1)"
  [[ -n "$remote_size" ]] || die "uploaded object is not reachable at $DOWNLOAD_URL"
  [[ "$remote_size" == "$size" ]] || die "remote size $remote_size does not match local $size"
  log "HEAD $DOWNLOAD_URL -> $remote_size bytes, matches"

  if (( verify_download )); then
    log "downloading the uploaded object to compare checksums (this takes a while)"
    remote_sha="$(curl -sSL --max-time 3600 "$DOWNLOAD_URL" | sha256sum | cut -d' ' -f1)"
    [[ "$remote_sha" == "$sha" ]] || die "remote sha256 $remote_sha does not match local $sha"
    log "remote sha256 matches: $sha"
  fi
  uploaded=1
fi

# ------------------------------------------------------- 6. publish -------

# Only metadata whose download URL has been confirmed live may claim to be
# published; everything else is a staged preview.
remote_verified=$(( uploaded || refreshed ))
publish_metadata=0
if (( remote_verified )); then publish_metadata=1
elif (( allow_unpublished )); then publish_metadata=1
fi

if (( dry_run )); then
  step "Dry run: live metadata and the archive store were not modified"
elif (( publish_metadata )); then
  step "Publishing metadata into $RELEASE_DIR"

  # A preview run must never take a live release down: once the download URL has
  # been published, rolling it back to unpublished hides it from the site.
  if (( ! remote_verified )) && [[ -f "$RELEASE_DIR/source-download.json" ]] \
     && python3 -c 'import json,sys; sys.exit(0 if json.load(open(sys.argv[1])).get("published") else 1)' \
          "$RELEASE_DIR/source-download.json"; then
    die "$version is already published. Refusing to roll its metadata back to an
unpublished state. Run the real upload, or delete
$RELEASE_DIR/source-download.json first if the release is genuinely withdrawn."
  fi

  mkdir -p "$BACKUP_ROOT/$version"
  for name in source-download.json; do
    [[ -f "$PUBLISH_DIR/$name" ]] && cp "$PUBLISH_DIR/$name" "$BACKUP_ROOT/$version/$name"
  done
  [[ -f "$RELEASE_DIR/SHA256SUMS" ]] && cp "$RELEASE_DIR/SHA256SUMS" "$BACKUP_ROOT/$version/SHA256SUMS"
  log "previous metadata backed up in $BACKUP_ROOT/$version"

  mkdir -p "$RELEASE_DIR"
  # Versioned directories land first and the site-wide index lands last, so an
  # interrupted run still leaves a consistent published release behind.
  for dir in licenses manifests provenance checksums; do
    rm -rf "$RELEASE_DIR/$dir.tmp"
    cp -r "$STAGING/$dir" "$RELEASE_DIR/$dir.tmp"
    rm -rf "$RELEASE_DIR/$dir"
    mv "$RELEASE_DIR/$dir.tmp" "$RELEASE_DIR/$dir"
  done

  python3 - "$STAGING/source-download.json" "$STAGING/release.json" "$remote_verified" <<'PY'
import json, sys
metadata = json.load(open(sys.argv[1]))
metadata['published'] = sys.argv[3] == '1'
with open(sys.argv[2], 'w') as handle:
    json.dump(metadata, handle, indent=2)
    handle.write('\n')
PY

  # The Android app records this release directory as its source URL, so it has to
  # resolve to something a person can read. Rendered last, from the same metadata
  # that is about to go live, and kept out of search results: the site page is the
  # public entry point, this is the machine-facing directory.
  python3 - "$STAGING/release.json" "$STAGING/index.html" <<'PY' \
    || die "could not render the release directory page"
import json, sys

data = json.load(open(sys.argv[1]))
size = data['size']
human = f'{size / 1024 / 1024:.1f} MiB'
links = [
    ('SHA256SUMS', f"{data['checksumsUrl']}"),
    ('Source manifest', f"{data['manifestUrl']}"),
    ('Licenses and notices', f"{data['licensesUrl']}"),
    ('Provenance', f"{data['provenanceUrl']}"),
    ('Checksums for every file here', f"{data['releaseUrl']}/checksums/SHA256SUMS"),
    ('README', f"{data['releaseUrl']}/README.md"),
]
rows = [
    ('Product', data['product']),
    ('Version', data['version']),
    ('Distribution', data['distribution']),
    ('Architectures', ', '.join(data['architectures'])),
    ('File', data['filename']),
    ('Size', f'{human} ({size:,} bytes)'),
    ('SHA-256', data['sha256']),
]


def row(label, value):
    mono = label in ('File', 'SHA-256')
    return f'      <dt>{label}</dt>\n      <dd{" class=\"mono\"" if mono else ""}>{value}</dd>\n'


if data['published']:
    action = (f'    <a class="btn" href="{data["downloadUrl"]}">'
              'Download Complete Source Bundle</a>\n')
else:
    action = ('    <p class="pending">The source bundle for this release has not been '
              'published yet; the checksums and manifests below are already final.</p>\n')

html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>NimoteCode Local Linux {data['version']} — corresponding source</title>
<meta name="description" content="Download NimoteCode Local Linux {data['version']} complete corresponding source for its bundled {data['distribution']} filesystem, with its SHA-256, manifests, provenance and license notices.">
<meta name="robots" content="noindex, follow">
<style>
:root {{
  color-scheme: light dark;
  --bg: #f7f8f8; --card: #ffffff; --text: #08090a; --muted: #5d6168;
  --border: rgba(35, 37, 42, 0.12); --brand: #4f46e5; --brand-hover: #4338ca;
}}
@media (prefers-color-scheme: dark) {{
  :root {{ --bg: #0e0f11; --card: #17181b; --text: #f2f3f5; --muted: #a2a7ae;
           --border: rgba(255, 255, 255, 0.14); --brand: #818cf8; --brand-hover: #a5b4fc; }}
}}
* {{ box-sizing: border-box; }}
body {{ margin: 0; padding-block: 48px; background: var(--bg); color: var(--text);
  font-family: "Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  line-height: 1.6; }}
main {{ max-width: 760px; margin: 0 auto; padding-inline: 20px; }}
.brand {{ display: inline-flex; gap: 10px; align-items: center; font-weight: 600; text-decoration: none;
  color: var(--text); margin-bottom: 28px; }}
h1 {{ font-size: clamp(1.6rem, 1.3rem + 1vw, 2rem); margin: 0 0 8px; letter-spacing: -0.02em; }}
.lede {{ color: var(--muted); margin: 0 0 28px; }}
.card {{ background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 4px 20px; }}
dl {{ margin: 0; }}
dt {{ font-size: .8rem; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); margin-top: 18px; }}
dd {{ margin: 2px 0 18px; word-break: break-word; }}
dd.mono {{ font-family: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, monospace; font-size: .88rem; }}
.actions {{ display: flex; flex-wrap: wrap; gap: 10px; margin: 28px 0; }}
.btn {{ display: inline-block; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;
  background: var(--brand); color: #fff; }}
.btn:hover {{ background: var(--brand-hover); }}
.btn.secondary {{ background: transparent; color: var(--text); border: 1px solid var(--border); }}
.pending {{ margin: 0; padding: 12px 0; color: var(--muted); }}
h2 {{ font-size: 1rem; margin: 32px 0 8px; }}
ul {{ padding-left: 20px; color: var(--muted); }}
a {{ color: var(--brand); }}
footer {{ margin-top: 36px; color: var(--muted); font-size: .875rem; }}
</style>
</head>
<body>
<main>
  <a class="brand" href="https://nimotecode.com/">NimoteCode</a>
  <h1>Local Linux corresponding source</h1>
  <p class="lede">Complete corresponding source for the third-party components of the Ubuntu root
  filesystem bundled with NimoteCode Local Linux. It does not contain NimoteCode proprietary
  application source.</p>
  <div class="card">
    <dl>
{''.join(row(k, v) for k, v in rows)}    </dl>
  </div>
  <div class="actions">
{action}    <a class="btn secondary" href="https://nimotecode.com/docs/local-linux-source">About this release</a>
  </div>
  <h2>More in this directory</h2>
  <ul>
{''.join(f'    <li><a href="{href}">{label}</a></li>\n' for label, href in links)}  </ul>
  <footer>Verify the download before unpacking:
  <code>sha256sum {data['filename']}</code></footer>
</main>
</body>
</html>
"""
open(sys.argv[2], 'w').write(html)
PY

  [[ -s "$STAGING/index.html" ]] || die "could not render the release directory page"

  cp "$STAGING/SHA256SUMS" "$RELEASE_DIR/SHA256SUMS"
  cp "$STAGING/source-manifest.json" "$RELEASE_DIR/source-manifest.json"
  cp "$STAGING/THIRD_PARTY_SOURCE.md" "$RELEASE_DIR/THIRD_PARTY_SOURCE.md"
  cp "$STAGING/README.md" "$RELEASE_DIR/README.md"
  cp "$STAGING/index.html" "$RELEASE_DIR/index.html"

  # Checksums for everything published below this directory, relative to it.
  (cd "$RELEASE_DIR" && find licenses manifests provenance -type f -print0 \
    | sort -z | xargs -0 sha256sum) > "$RELEASE_DIR/checksums/SHA256SUMS"

  cp "$STAGING/release.json" "$RELEASE_DIR/source-download.json"
  cp "$STAGING/release.json" "$PUBLISH_DIR/source-download.json"
  log "published $RELEASE_DIR"
else
  step "Not publishing live metadata"
  log "nothing was uploaded, so the published metadata is unchanged"
  log "staged output kept at: $STAGING"
  log "re-run without --skip-upload once Cloudflare R2 access is available,"
  log "or pass --allow-unpublished to preview the page with a non-live link"
fi

# ------------------------------------------------- 7. archive relocation --

if (( uploaded )) || (( relocate_archive )); then
  if (( keep_archive )); then
    log "keeping the archive at $archive (--keep-archive)"
  elif [[ "$archive" == "$ARCHIVE_STORE/$FILENAME" ]]; then
    log "archive already stored outside the website tree: $archive"
  else
    step "Moving the archive out of the website tree"
    mkdir -p "$ARCHIVE_STORE"
    mv -f "$archive" "$ARCHIVE_STORE/$FILENAME"
    archive="$ARCHIVE_STORE/$FILENAME"
    printf '%s  %s\n' "$sha" "$FILENAME" > "$archive.sha256"
    log "archive stored at: $archive"
  fi
fi

# --------------------------------------------------------- 8. redirects ----

if (( uploaded )); then
  step "Recording the legacy download redirect"
  redirect_file="$SITE_ROOT/docs/public/_redirects"
  legacy="/opensource/local-linux/$version/$FILENAME"
  if grep -q "^$legacy " "$redirect_file" 2>/dev/null; then
    log "redirect already present: $legacy"
  else
    printf '%s %s 301\n' "$legacy" "$DOWNLOAD_URL" >> "$redirect_file"
    log "appended to docs/public/_redirects: $legacy -> $DOWNLOAD_URL"
  fi
fi

# ------------------------------------------------------------ 9. report ----

step "Summary"
log "version      : $version"
log "archive      : $archive ($size bytes)"
log "sha256       : $sha"
log "R2 object    : $R2_BUCKET/$OBJECT_KEY"
log "download URL : $DOWNLOAD_URL"
if (( dry_run )); then
  log "metadata     : unchanged (dry run)"
elif (( refreshed )); then
  log "metadata     : $PUBLISH_DIR/source-download.json (published, object re-verified)"
elif (( uploaded )); then
  log "metadata     : $PUBLISH_DIR/source-download.json (published)"
elif (( allow_unpublished )); then
  log "metadata     : $PUBLISH_DIR/source-download.json (published=false, upload pending)"
else
  log "metadata     : unchanged (no upload)"
fi
