#!/usr/bin/env python3
"""Validate generated data files used by the frontend."""

from pathlib import Path
import json
import sys


DATA_DIR = Path("public/data")
DISEASES_DIR = DATA_DIR / "krankheiten"


def load_json(path):
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def has_text(value):
    return isinstance(value, str) and value.strip() != ""


def validate():
    errors = []
    warnings = []

    variablen_path = DATA_DIR / "variablen.json"
    if not variablen_path.exists():
        errors.append("Missing public/data/variablen.json")
        return errors, warnings

    variablen = load_json(variablen_path)

    if not DISEASES_DIR.exists():
        errors.append("Missing public/data/krankheiten directory")
        return errors, warnings

    for disease_file in sorted(DISEASES_DIR.glob("*.json")):
        disease = load_json(disease_file)
        slug = disease.get("slug", "")

        if slug != slug.strip():
            errors.append(
                f"{disease_file.name}: slug has leading/trailing whitespace ({slug!r})"
            )

        expected_name = f"{slug}.json"
        if slug and disease_file.name != expected_name:
            errors.append(
                f"{disease_file.name}: filename does not match slug ({expected_name})"
            )

        unknown_varnames = set()

        for section_name in ("aktionsbausteine", "interview", "inhalte"):
            for item in disease.get(section_name, []):
                varname = item.get("varname") if isinstance(item, dict) else None
                if varname and varname not in variablen:
                    unknown_varnames.add(varname)

        if unknown_varnames:
            errors.append(
                f"{disease_file.name}: unknown varnames {sorted(unknown_varnames)}"
            )

        massnahmen = disease.get("aktionsbausteine") or []
        interview = disease.get("interview") or []
        links = disease.get("quellen") or []

        renderable_massnahmen = [
            item
            for item in massnahmen
            if (
                isinstance(item, dict)
                and ((item.get("varname") in variablen) or has_text(item.get("aktion")))
            )
        ]

        renderable_interview = [
            item
            for item in interview
            if (
                isinstance(item, dict)
                and (
                    (item.get("varname") in variablen) or has_text(item.get("question"))
                )
            )
        ]

        renderable_links = [
            item
            for item in links
            if isinstance(item, dict)
            and has_text(item.get("name"))
            and has_text(item.get("webseite"))
        ]

        if massnahmen and not renderable_massnahmen:
            warnings.append(
                f"{disease_file.name}: massnahmen section has no renderable entries"
            )

        if interview and not renderable_interview:
            warnings.append(
                f"{disease_file.name}: interview section has no renderable entries"
            )

        if not renderable_links:
            warnings.append(f"{disease_file.name}: no links available")

    return errors, warnings


def main():
    errors, warnings = validate()

    for warning in warnings:
        print(f"WARN: {warning}")

    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        sys.exit(1)

    print("Data validation passed")


if __name__ == "__main__":
    main()
