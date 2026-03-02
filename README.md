# Infektionsschutzkompendium

Webanwendung fuer Gesundheitsaemter mit Leitfadeninhalten zu meldepflichtigen Erkrankungen.

Live: https://jakobschumacher.github.io/infektionsschutzkompendium

## Projektstruktur

- `src/`: React-Frontend (Vite)
- `_katalog/`: Quellinhalte pro Krankheit (Markdown + YAML Frontmatter)
- `_querschnitt/`: Quellinhalte fuer Querschnittsthemen
- `_data/variablen.yml`: Wiederverwendbare Textbausteine
- `public/data/`: Generierte JSON-Dateien fuer das Frontend
- `extract_data.py`: Generator von Markdown/YAML nach JSON
- `validate_data.py`: Datenvalidierung (Slug, varname-Referenzen, renderbare Inhalte)

## Quelle der Wahrheit

Die Inhalte werden in `_katalog`, `_querschnitt` und `_data/variablen.yml` gepflegt.
`public/data/*` ist ein Build-Artefakt und wird aus diesen Quellen erzeugt.

## Lokale Entwicklung

```bash
npm install
npm run extract
npm run dev
```

## Datenpipeline

```bash
npm run extract
```

Das fuehrt aus:
1. `extract_data.py` (JSON neu erzeugen)
2. `validate_data.py` (Konsistenz pruefen)

Die Validierung bricht bei harten Fehlern (z. B. unbekannte `varname`) mit Exit-Code `1` ab.

## Build

```bash
npm run build
```

## Beitrag leisten

1. Inhalte in `_katalog`, `_querschnitt` oder `_data/variablen.yml` anpassen
2. `npm run extract` ausfuehren
3. `npm run build` ausfuehren
4. Aenderungen committen und Pull Request erstellen
