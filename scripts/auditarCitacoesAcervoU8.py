import os
import glob
import re

def main():
    module_files = sorted(glob.glob('src/content/modules/**/*.ts', recursive=True))
    quotes = []

    for f in module_files:
        with open(f, 'r', encoding='utf-8') as fp:
            lines = fp.readlines()
        
        for i, line in enumerate(lines):
            l_strip = line.strip()
            # Look for blockquotes or quotes attributed to authors
            if l_strip.startswith('>') and ('*"' in l_strip or '> "' in l_strip or '> *"“' in l_strip or '“' in l_strip or '"' in l_strip):
                context_before = [lines[j].strip() for j in range(max(0, i-2), i)]
                context_after = [lines[j].strip() for j in range(i+1, min(len(lines), i+3))]
                quotes.append((f, i + 1, l_strip, context_before, context_after))

    with open('auditoria_quotes.txt', 'w', encoding='utf-8') as out:
        out.write(f"Total candidate quotes: {len(quotes)}\n")
        for f, line_no, text, cb, ca in quotes:
            out.write("=" * 80 + "\n")
            out.write(f"FILE: {f}:{line_no}\n")
            out.write(f"BEFORE: {' | '.join(cb)}\n")
            out.write(f"QUOTE:  {text}\n")
            out.write(f"AFTER:  {' | '.join(ca)}\n")

if __name__ == '__main__':
    main()
