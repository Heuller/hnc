import json
import re

with open("scripts/embasamento_catalog.json", "r", encoding="utf-8") as f:
    catalog = json.load(f)

print(f"Total entries: {len(catalog)}")

categories = {
    "1. SIGB, Koha, FOLIO, Discovery, OPAC, Metabusca, OAI-PMH, Z39.50": [],
    "2. Informação Legislativa, Jurídica, LexML, RVBI, Legimática, Proposições": [],
    "3. Referência, CRM, DSI, Curadoria, Inteligência, Estudos de Usuários, Dossiês": [],
    "4. Bibliometria, Cientometria, Altmetria, Indicadores": [],
    "5. Preservação Digital, Repositórios, Metadados, DSpace": [],
    "6. Tecnologia da Informação, Ciência de Dados, IA, Governança Digital, Apostila": [],
    "7. Direito Constitucional, Administrativo, Governança Pública": [],
    "8. Outros / Letramento / Competência Informacional": []
}

keywords_map = {
    "1. SIGB, Koha, FOLIO, Discovery, OPAC, Metabusca, OAI-PMH, Z39.50": [
        "koha", "folio", "discovery", "metabuscador", "opac", "sigb", "z39.50", "sru", "srw", "niso", "descoberta"
    ],
    "2. Informação Legislativa, Jurídica, LexML, RVBI, Legimática, Proposições": [
        "legislat", "jurid", "lexml", "rvbi", "legimatica", "proposic", "eirao", "direito"
    ],
    "3. Referência, CRM, DSI, Curadoria, Inteligência, Estudos de Usuários, Dossiês": [
        "crm", "disseminacao", "seletiva", "dsi", "curadoria", "referencia", "usuario", "inteligencia", "dossie", "relatorio", "estrategia de busca", "operadores"
    ],
    "4. Bibliometria, Cientometria, Altmetria, Indicadores": [
        "bibliometr", "cientometr", "altmetr", "indicador", "bradford", "lotka", "zipf"
    ],
    "5. Preservação Digital, Repositórios, Metadados, DSpace": [
        "preservacao", "arellano", "oais", "metadado", "dspace", "repositorio"
    ],
    "6. Tecnologia da Informação, Ciência de Dados, IA, Governança Digital, Apostila": [
        "inteligencia artificial", "dados", "ciencia de dados", "informatica", "governo-eletronico", "biometria", "certificacao"
    ],
    "7. Direito Constitucional, Administrativo, Governança Pública": [
        "constitucional", "governanca", "administrativo", "regulacao", "pilares"
    ]
}

categorized = []

for item in catalog:
    fn = item.get("filename", "").lower()
    text = (item.get("sample_text", "") + " " + item.get("meta_title", "") + " " + item.get("meta_subject", "")).lower()
    
    matched = False
    for cat, kws in keywords_map.items():
        if any(kw in fn or kw in text for kw in kws):
            categories[cat].append({
                "filename": item.get("filename"),
                "pages": item.get("num_pages"),
                "title": item.get("meta_title") or item.get("filename"),
                "snippet": item.get("sample_text", "")[:300].replace("\n", " ")
            })
            matched = True
            break
    if not matched:
        categories["8. Outros / Letramento / Competência Informacional"].append({
            "filename": item.get("filename"),
            "pages": item.get("num_pages"),
            "title": item.get("meta_title") or item.get("filename"),
            "snippet": item.get("sample_text", "")[:300].replace("\n", " ")
        })

print("\n=== RESUMO POR CATEGORIA ===")
for cat, items in categories.items():
    print(f"\n### {cat} ({len(items)} arquivos):")
    for it in items[:6]:
        print(f" - [{it['filename']}] ({it['pages']}p): {it['snippet'][:120]}...")

with open("scripts/embasamento_categorizado.json", "w", encoding="utf-8") as f:
    json.dump(categories, f, ensure_ascii=False, indent=2)
