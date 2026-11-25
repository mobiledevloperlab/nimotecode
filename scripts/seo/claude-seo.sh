#!/usr/bin/env bash
set -euo pipefail

root=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)
cache="$root/.seo-cache"
source="$cache/claude-seo"
release=v2.6.2
commit=468ed5b0d9e3249394783710e54abb02837e326b
upstream=https://github.com/AgriciDaniel/claude-seo.git
lock="$root/scripts/seo/requirements.lock"
python="$cache/venv/bin/python"

if [[ ${1:-} == setup ]]; then
  mkdir -p "$cache"
  if [[ ! -d "$source/.git" ]]; then
    git init -q "$source"
  fi
  git -C "$source" fetch --depth 1 --no-tags "$upstream" "refs/tags/$release"
  [[ $(git -C "$source" rev-parse 'FETCH_HEAD^{commit}') == "$commit" ]]
  git -C "$source" checkout --detach "$commit"
  python3 -m venv "$cache/venv"
  "$python" -m pip --isolated install --disable-pip-version-check \
    --timeout 20 --retries 2 --index-url https://pypi.org/simple --only-binary=:all: --require-hashes -r "$lock"
  "$python" -m pip check
  exit
fi

[[ -x "$python" && $(git -C "$source" rev-parse HEAD 2>/dev/null) == "$commit" ]] || {
  echo "Run bash scripts/seo/claude-seo.sh setup first." >&2
  exit 1
}
case ${1:-} in
  page) tool=page_checks ;;
  geo) tool=agentic_check ;;
  *) echo "Usage: $0 {setup|page|geo} [arguments]" >&2; exit 2 ;;
esac
shift
# Executable scripts are the reviewed allowlist. Keep upstream reference
# material in the pinned checkout for explicit, read-only consultation.
git -C "$source" diff --quiet "$commit" -- scripts || {
  echo "Claude SEO scripts differ from the reviewed revision." >&2
  exit 1
}
exec "$python" -I "$source/scripts/$tool.py" "$@"
