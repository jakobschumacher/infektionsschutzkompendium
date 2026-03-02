# AGENTS

## Content workflow

- Source of truth is markdown/yaml in `_katalog`, `_querschnitt`, `_data/variablen.yml`.
- Do not edit `public/data/*` manually unless you are fixing a broken release artifact.
- After content changes always run:
  - `npm run extract`
  - `npm run build`

## Data rules

- Keep disease filenames slug-safe (no leading/trailing spaces).
- Keep `varname` keys consistent with `_data/variablen.yml`.
- Prefer explicit `aktion` and `question` text when no variable entry exists.

## Frontend rules

- Disease tabs should only be shown when they contain renderable data.
- Keep UI text in German.
