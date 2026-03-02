#!/usr/bin/env python3
"""Extract YAML frontmatter from markdown sources and export JSON data."""

import json
import yaml
import re
from datetime import date
from pathlib import Path


def extract_frontmatter(file_path):
    """Extract YAML frontmatter from a markdown file."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Match YAML frontmatter between ---
    match = re.match(r"^---\s*\n(.*?)\n---\s*\n?(.*)", content, re.DOTALL)

    if not match:
        return None, None

    frontmatter_text = match.group(1)
    markdown_content = match.group(2).strip()

    try:
        frontmatter = yaml.safe_load(frontmatter_text)
        return frontmatter, markdown_content
    except yaml.YAMLError as e:
        print(f"Error parsing {file_path}: {e}")
        return None, None


def normalize_slug(raw_stem):
    """Normalize file stem to a stable slug."""
    return re.sub(r"\s+", "-", raw_stem.strip().lower())


def ensure_list(value):
    """Return value as list; fallback to empty list."""
    return value if isinstance(value, list) else []


def clear_json_files(directory):
    """Remove stale json files before regeneration."""
    if not directory.exists():
        return

    for json_file in directory.glob("*.json"):
        json_file.unlink()


def process_katalog():
    """Process _katalog directory and extract disease data."""
    katalog_dir = Path("_katalog")
    output_dir = Path("public/data/krankheiten")
    output_dir.mkdir(parents=True, exist_ok=True)
    clear_json_files(output_dir)

    diseases = []

    for md_file in katalog_dir.glob("*.md"):
        frontmatter, content = extract_frontmatter(md_file)

        if frontmatter:
            slug = normalize_slug(md_file.stem)

            disease_data = {
                "slug": slug,
                "title": frontmatter.get("title", md_file.stem.strip()),
                "author": frontmatter.get("author"),
                "basisdaten": frontmatter.get("basisdaten", {}),
                "inhalte": ensure_list(frontmatter.get("inhalte", [])),
                "aktionsbausteine": ensure_list(
                    frontmatter.get("aktionsbausteine", [])
                ),
                "interview": ensure_list(frontmatter.get("interview", [])),
                "quellen": ensure_list(frontmatter.get("quellen", [])),
                "content": content,
            }

            # Save individual disease JSON
            with open(output_dir / f"{slug}.json", "w", encoding="utf-8") as f:
                json.dump(disease_data, f, ensure_ascii=False, indent=2)

            # Add to diseases list (minimal data for overview)
            diseases.append(
                {
                    "slug": slug,
                    "title": disease_data["title"],
                    "kurzbeschreibung": disease_data["basisdaten"].get(
                        "kurzbeschreibung", ""
                    ),
                }
            )

    diseases.sort(key=lambda item: item["slug"])

    with open(Path("public/data/krankheiten.json"), "w", encoding="utf-8") as f:
        json.dump(diseases, f, ensure_ascii=False, indent=2)

    print(f"Processed {len(diseases)} diseases")
    return diseases


def parse_markdown_sections(content):
    """Parse markdown content into intro text and sections."""
    intro_parts = []
    sections = []
    current_section = None
    current_paragraph = []

    def flush_paragraph():
        nonlocal current_paragraph

        if not current_paragraph:
            return

        paragraph = " ".join(line.strip() for line in current_paragraph).strip()
        current_paragraph = []

        if not paragraph:
            return

        if current_section:
            current_section["items"].append(paragraph)
        else:
            intro_parts.append(paragraph)

    for line in content.split("\n"):
        line = line.strip()

        if not line:
            flush_paragraph()
            continue

        if line.startswith("#"):
            flush_paragraph()

            title = line.lstrip("#").strip()
            if not title:
                continue

            current_section = {"title": title, "items": []}
            sections.append(current_section)
            continue

        if line.startswith("*"):
            flush_paragraph()
            item = line.lstrip("*").strip()
            if item:
                if current_section:
                    current_section["items"].append(item)
                else:
                    intro_parts.append(item)
            continue

        current_paragraph.append(line)

    flush_paragraph()

    intro = " ".join(intro_parts).strip() or None
    return intro, sections


def process_querschnitt():
    """Process _querschnitt directory."""
    querschnitt_dir = Path("_querschnitt")
    output_dir = Path("public/data/querschnitt")
    output_dir.mkdir(parents=True, exist_ok=True)
    clear_json_files(output_dir)

    topics = []

    for md_file in querschnitt_dir.glob("*.md"):
        frontmatter, content = extract_frontmatter(md_file)

        if frontmatter:
            slug = normalize_slug(md_file.stem)

            intro, sections = parse_markdown_sections(content)

            topic_data = {
                "slug": slug,
                "title": frontmatter.get("title", md_file.stem.strip()),
                "intro": intro,
                "sections": sections,
                "layout": frontmatter.get("layout", "page"),
            }

            with open(output_dir / f"{slug}.json", "w", encoding="utf-8") as f:
                json.dump(topic_data, f, ensure_ascii=False, indent=2)

            topics.append({"slug": slug, "title": topic_data["title"]})

    topics.sort(key=lambda item: item["slug"])

    with open(Path("public/data/querschnitt.json"), "w", encoding="utf-8") as f:
        json.dump(topics, f, ensure_ascii=False, indent=2)

    print(f"Processed {len(topics)} cross-cutting topics")
    return topics


def process_variablen():
    """Process _data/variablen.yml."""
    variablen_file = Path("_data/variablen.yml")

    if variablen_file.exists():
        with open(variablen_file, "r", encoding="utf-8") as f:
            variablen = yaml.safe_load(f)

        output_file = Path("public/data/variablen.json")
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(variablen, f, ensure_ascii=False, indent=2)

        print(f"Processed variables: {len(variablen)} entries")
    else:
        print("No variablen.yml found")


def main():
    """Main extraction function."""
    print("Starting data extraction...")

    # Create public/data directory
    Path("public/data").mkdir(parents=True, exist_ok=True)

    # Process all data
    diseases = process_katalog()
    topics = process_querschnitt()
    process_variablen()

    # Create main index
    index_data = {
        "diseases": diseases,
        "topics": topics,
        "metadata": {
            "generated": date.today().isoformat(),
            "total_diseases": len(diseases),
            "total_topics": len(topics),
        },
    }

    with open(Path("public/data/index.json"), "w", encoding="utf-8") as f:
        json.dump(index_data, f, ensure_ascii=False, indent=2)

    print("\nExtraction complete!")
    print(f"Generated JSON files in public/data/")


if __name__ == "__main__":
    main()
