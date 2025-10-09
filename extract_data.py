#!/usr/bin/env python3
"""
Extract YAML frontmatter from Jekyll markdown files and convert to JSON.
This script processes _katalog, _querschnitt, _fortbildung, and _aktionen directories.
"""

import os
import json
import yaml
import re
from pathlib import Path


def extract_frontmatter(file_path):
    """Extract YAML frontmatter from a markdown file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match YAML frontmatter between ---
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n?(.*)', content, re.DOTALL)

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


def process_katalog():
    """Process _katalog directory and extract disease data."""
    katalog_dir = Path('_katalog')
    output_dir = Path('public/data/krankheiten')
    output_dir.mkdir(parents=True, exist_ok=True)

    diseases = []

    for md_file in katalog_dir.glob('*.md'):
        frontmatter, content = extract_frontmatter(md_file)

        if frontmatter:
            # Create slug from filename
            slug = md_file.stem.lower()

            disease_data = {
                'slug': slug,
                'title': frontmatter.get('title', md_file.stem),
                'author': frontmatter.get('author'),
                'basisdaten': frontmatter.get('basisdaten', {}),
                'inhalte': frontmatter.get('inhalte', []),
                'aktionsbausteine': frontmatter.get('aktionsbausteine', []),
                'interview': frontmatter.get('interview', []),
                'quellen': frontmatter.get('quellen', []),
                'content': content
            }

            # Save individual disease JSON
            with open(output_dir / f'{slug}.json', 'w', encoding='utf-8') as f:
                json.dump(disease_data, f, ensure_ascii=False, indent=2)

            # Add to diseases list (minimal data for overview)
            diseases.append({
                'slug': slug,
                'title': disease_data['title'],
                'kurzbeschreibung': disease_data['basisdaten'].get('kurzbeschreibung', '')
            })

    # Save diseases index
    with open(Path('public/data/krankheiten.json'), 'w', encoding='utf-8') as f:
        json.dump(diseases, f, ensure_ascii=False, indent=2)

    print(f"Processed {len(diseases)} diseases")
    return diseases


def process_querschnitt():
    """Process _querschnitt directory."""
    querschnitt_dir = Path('_querschnitt')
    output_dir = Path('public/data/querschnitt')
    output_dir.mkdir(parents=True, exist_ok=True)

    topics = []

    for md_file in querschnitt_dir.glob('*.md'):
        frontmatter, content = extract_frontmatter(md_file)

        if frontmatter:
            slug = md_file.stem.lower()

            topic_data = {
                'slug': slug,
                'title': frontmatter.get('title', md_file.stem),
                'content': content,
                **frontmatter
            }

            with open(output_dir / f'{slug}.json', 'w', encoding='utf-8') as f:
                json.dump(topic_data, f, ensure_ascii=False, indent=2)

            topics.append({
                'slug': slug,
                'title': topic_data['title']
            })

    # Save topics index
    with open(Path('public/data/querschnitt.json'), 'w', encoding='utf-8') as f:
        json.dump(topics, f, ensure_ascii=False, indent=2)

    print(f"Processed {len(topics)} cross-cutting topics")
    return topics


def process_variablen():
    """Process _data/variablen.yml."""
    variablen_file = Path('_data/variablen.yml')

    if variablen_file.exists():
        with open(variablen_file, 'r', encoding='utf-8') as f:
            variablen = yaml.safe_load(f)

        output_file = Path('public/data/variablen.json')
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(variablen, f, ensure_ascii=False, indent=2)

        print(f"Processed variables: {len(variablen)} entries")
    else:
        print("No variablen.yml found")


def main():
    """Main extraction function."""
    print("Starting data extraction...")

    # Create public/data directory
    Path('public/data').mkdir(parents=True, exist_ok=True)

    # Process all data
    diseases = process_katalog()
    topics = process_querschnitt()
    process_variablen()

    # Create main index
    index_data = {
        'diseases': diseases,
        'topics': topics,
        'metadata': {
            'generated': '2025-10-09',
            'total_diseases': len(diseases),
            'total_topics': len(topics)
        }
    }

    with open(Path('public/data/index.json'), 'w', encoding='utf-8') as f:
        json.dump(index_data, f, ensure_ascii=False, indent=2)

    print("\nExtraction complete!")
    print(f"Generated JSON files in public/data/")


if __name__ == '__main__':
    main()
