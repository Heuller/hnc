import json
from pathlib import Path
from pypdf import PdfReader

EMBASAMENTO = Path(r"C:\Users\bibli\Documents\Embasamento")

def inspect_file(filename, pages_to_check=[0, 1, 2, 3]):
    filepath = EMBASAMENTO / filename
    if not filepath.exists():
        # try search by name
        matches = list(EMBASAMENTO.glob(f"*{filename}*"))
        if matches:
            filepath = matches[0]
        else:
            print(f"Not found: {filename}")
            return
    
    print(f"\n=======================================================")
    print(f"FILE: {filepath.name} (Total pages: {len(PdfReader(str(filepath)).pages)})")
    print(f"=======================================================")
    reader = PdfReader(str(filepath))
    for p in pages_to_check:
        if p < len(reader.pages):
            text = reader.pages[p].extract_text() or ""
            print(f"--- PAGE {p+1} ---")
            print(text[:1200])

key_files = [
    "Viana2022-FOLIOplataformaabertadeserviosdebibliotecacriadaparainovaocontnua.pdf",
    "koha-um-sistema-integrado-de-gerenciamento-de-bibliotecas.pdf",
    "Servicos_de_descoberta_panorama_nas_bibl.pdf",
    "Dos_Catalogos_aos_Metabuscadores_e_Servi.pdf",
    "NISO report future_library_resource_discovery 2015.pdf",
    "100-427-1-PB.pdf",  # RVBI quatro décadas
    "41-170-1-PB.pdf",   # Edilenice Passos bases de legislacao federal
    "sistema_legislacao_eirao.pdf",
    "contribuicao_legimatica_ferreira.pdf",
    "como_pesquisar_proposicoes.pdf",
    "CRM_Customer_Relationship_Management.pdf",
    "CuradoriaInformacaoNova_Bezerra_2017.pdf",
    "diseminacao_seletiva_eirao.pdf",
    "88_5328.docx.pdf",  # Candido: Associacao da Bibliometria e do Estado da Arte
    "Indicadores_bibliomtricos.pdf",
    "Ciencia-de-Dados-Conceitos-Metodos-e-Aplicacoes.pdf",
    "Apostila Cespe- Informtica Para Concurso Pblico.pdf"
]

for kf in key_files:
    try:
        inspect_file(kf, [0, 1, 2])
    except Exception as e:
        print(f"Error {kf}: {e}")
