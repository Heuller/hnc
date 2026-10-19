import glob
import os
import re

files = sorted(glob.glob('src/content/modules/**/sub-*.ts', recursive=True))
print(f"Total submodulos encontrados: {len(files)}")

counts = {"has_didatica": 0, "needs_didatica": 0}
submodulos = []

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    has_densa = 'teoriaDensaMarkdown' in content
    has_didatica = 'teoriaDidaticaMarkdown' in content
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", content)
    num_match = re.search(r"numero:\s*['\"]([^'\"]+)['\"]", content)
    sub_id = id_match.group(1) if id_match else os.path.basename(f)
    sub_num = num_match.group(1) if num_match else '?'

    if has_didatica:
        counts["has_didatica"] += 1
    else:
        counts["needs_didatica"] += 1
        submodulos.append((sub_num, sub_id, f))

print(f"Com teoriaDidaticaMarkdown: {counts['has_didatica']}")
print(f"Precisam de teoriaDidaticaMarkdown: {counts['needs_didatica']}")
print("\nLista completa dos 70 que precisam:")
for s in submodulos:
    print(f"  {s[0]:<6} | {s[1]:<12} | {s[2]}")
