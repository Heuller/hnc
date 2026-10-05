import json
import os

with open("scripts/embasamento_catalog.json", "r", encoding="utf-8") as f:
    catalog = json.load(f)

# Focus on extracting specific, high-yield insights for the syllabus
topics_of_interest = {
    "FOLIO_Koha_Discovery": ["folio", "koha", "discovery", "metabusca", "servicos de descoberta", "wsl", "web-scale", "niso", "odi"],
    "RVBI_LexML_Legimatica_Eirao": ["rvbi", "lexml", "eirao", "legimatica", "proposicoes", "passos", "sicon", "diario oficial"],
    "CRM_DSI_Curadoria_Referencia": ["crm", "customer relationship", "greenberg", "curadoria", "bezerra", "dsi", "disseminacao seletiva", "alerta", "dossie", "relatorio tematico"],
    "Bibliometria_Altmetria_Cientometria": ["bibliometr", "cientometr", "altmetr", "leis bibliometricas", "bradford", "lotka", "zipf", "h-index", "fator de impacto"],
    "Ciencia_Dados_PowerBI_Informatica": ["ciencia de dados", "power bi", "storytelling", "visualizacao", "histograma", "box plot", "office 365", "redes", "segurança", "ransomware"]
}

insights = {k: [] for k in topics_of_interest}

for item in catalog:
    fn = item.get("filename", "")
    text = (item.get("sample_text", "") + " " + item.get("meta_title", "")).lower()
    
    for topic, kws in topics_of_interest.items():
        matched_kws = [kw for kw in kws if kw in fn.lower() or kw in text]
        if matched_kws:
            insights[topic].append({
                "filename": fn,
                "pages": item.get("num_pages"),
                "matched": matched_kws,
                "preview": item.get("sample_text", "")[:600].replace("\n", " ")
            })

with open("scripts/embasamento_insights.json", "w", encoding="utf-8") as f:
    json.dump(insights, f, ensure_ascii=False, indent=2)

print("Insights extraction complete:")
for k, v in insights.items():
    print(f" - {k}: {len(v)} matches")
