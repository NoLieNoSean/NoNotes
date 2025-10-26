#!/usr/bin/env python3
"""
collect_block_ids.py

Usage:
    python collect_block_ids.py /path/to/obsidian/vault

Output:
    Prints a JSON dictionary mapping block-id -> [note_id, callout_number]

Notes:
- Does NOT edit any files.
- Expects frontmatter delimited by '---' at file start and an 'id:' field inside it.
- Callout detection looks for lines like:
    > [!Theorem] ...
  (case-insensitive for the callout kind).
- The script searches forward from each callout start for the first standalone block id
  line of the form:
    ^<id>
  before the next callout; if found it is used for that callout.
"""
import os
import re
import sys
import json
import argparse

ALLOWED_CALLOUTS = {"definition", "lemma", "theorem", "corollary", "example", "claim", "proposition", "exercise", "remark", "fact", "conjecture"}

CALLOUT_RE = re.compile(r'^\s*>\s*\[!(?P<kind>[A-Za-z]+)\]', re.IGNORECASE)
BLOCK_ID_RE = re.compile(r'^\s*\^([A-Za-z0-9_-]+)\s*$')
FRONTMATTER_DELIM = re.compile(r'^\s*---\s*$')
ID_LINE_RE = re.compile(r'^\s*id\s*:\s*(.+)\s*$', re.IGNORECASE)

def extract_frontmatter_id(lines):
    """
    Given file lines, return the id from YAML frontmatter (if any), else None.
    """
    if not lines:
        return None
    # find first two '---' delimiters
    delim_idxs = [i for i, ln in enumerate(lines[:50]) if FRONTMATTER_DELIM.match(ln)]
    if len(delim_idxs) < 2 or delim_idxs[0] != 0:
        return None
    start, end = delim_idxs[0], delim_idxs[1]
    fm_lines = lines[start + 1:end]
    for ln in fm_lines:
        m = ID_LINE_RE.match(ln)
        if m:
            raw = m.group(1).strip()
            # strip optional quotes
            if (raw.startswith('"') and raw.endswith('"')) or (raw.startswith("'") and raw.endswith("'")):
                raw = raw[1:-1]
            # try to convert to int if it looks numeric
            if re.fullmatch(r'\d+', raw):
                return int(raw)
            return raw
    return None

def process_file(path, result):
    """
    Process a single .md file: extract frontmatter id, scan for callouts,
    enumerate them and map any found block-ids to [note_id, callout_number]
    storing results in the 'result' dict.
    """
    try:
        with open(path, 'r', encoding='utf-8') as f:
            lines = f.read().splitlines()
    except Exception as e:
        print(f"Warning: couldn't read {path}: {e}", file=sys.stderr)
        return

    note_id = extract_frontmatter_id(lines)
    if note_id is None:
        # skip files without frontmatter id
        return

    # We will iterate through lines and detect callout starts
    callout_count = 0
    n = len(lines)
    i = 0
    while i < n:
        ln = lines[i]
        m = CALLOUT_RE.match(ln)
        if m:
            kind = m.group('kind').lower()
            if kind in ALLOWED_CALLOUTS:
                callout_count += 1
                # search forward for ^blockid until next callout start or EOF
                j = i + 1
                block_id_found = None
                while j < n:
                    # stop if next callout start encountered
                    if CALLOUT_RE.match(lines[j]):
                        break
                    bm = BLOCK_ID_RE.match(lines[j])
                    if bm:
                        block_id_found = bm.group(1)
                        break
                    j += 1
                if block_id_found:
                    # If block id already seen, warn but overwrite (deterministic behavior)
                    if block_id_found in result:
                        # keep previous mapping but emit a warning
                        prev = result[block_id_found]
                        print(f"Warning: duplicate block id '{block_id_found}' found in {path}; "
                              f"previously mapped to {prev}, now mapping to [{note_id}, {callout_count}]",
                              file=sys.stderr)
                    result[block_id_found] = {"note_id": note_id, "callout_count": callout_count, "kind" :kind}
            # move on
        i += 1

def collect_from_folder(root):
    result = {}
    for dirpath, dirnames, filenames in os.walk(root):
        for fn in filenames:
            if fn.lower().endswith('.md'):
                full = os.path.join(dirpath, fn)
                process_file(full, result)
    return result

def main():
    p = argparse.ArgumentParser(description="Collect Obsidian block ids for callouts")
    p.add_argument("vault", help="root folder to scan (recursively) for .md files")
    p.add_argument("--pretty", action="store_true", help="pretty-print JSON")
    args = p.parse_args()

    if not os.path.isdir(args.vault):
        print("Error: provided path is not a directory.", file=sys.stderr)
        sys.exit(2)

    mapping = collect_from_folder(args.vault)

    # Sort keys for deterministic output
    ordered = {k: mapping[k] for k in sorted(mapping.keys())}
    if args.pretty:
        print(json.dumps(ordered, indent=2, ensure_ascii=False))
    else:
        print(json.dumps(ordered, ensure_ascii=False))

if __name__ == "__main__":
    main()
