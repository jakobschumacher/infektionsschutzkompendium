---
title: Legionellose
layout: post2
fortbildung: fortbildung/Legionellose.html
aktionen: aktionen/Legionellose.html

author: Jakob Schumacher

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/7/7d/Legionella_pneumophila_01.jpg
  bildcredits: https://commons.wikimedia.org/wiki/File:Legionella_pneumophila_01.jpg
  bildautor: CDC
  kurzbeschreibung: Legionellose ist eine durch Wasser übetragbare Krankheit. Im Gesundheitsamt spielen Legionellen eine besondere Rolle aufgrund der Maßnahmen bei einem Legionellenfund im Trinkwasser.

inhalte:  
# Erregerdaten
  - id: erregername
    text: Die Infektionskrankheit Legionellose wird durch humanpathogene  Erreger der Legionellae hervorgerufen.
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium.
    kategorie: erregerdaten
  - id: erregergruppen
    text: Humanpathogen sind Legionelle pneumophila, Legionella micadei, L. bozmanii, L. longbeachae, L. anisa. Es gibt unterschiedliche Serogruppen, die sich wiederum in Subtypen unterteilen
    quellename: RKI-Ratgeber
    kategorie: erregerdaten
  - id: toxine
    text:
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: Legionelle  pneumophila Serogruppe 1 ist am häufigsten. Der Subtyp MAb 3-1 ist besonders pathogen.
    kategorie: erregerdaten

# Vorkommen
  - id: vorkommen_deu
    text: In Deutschland werden etwa 1000 Fälle pro Jahr gemeldet. Vermutet werden bis zu 30.000 Fälle
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor.
    kategorie: vorkommen
  - id: reservoir
    text: Der Erreger kommt in geringer Zahl in den meisten Gewässern vor.
    kategorie: vorkommen hygkowichtig
    quellename: RKI Ratgeber
  - id: umweltresistenz
    text: Der Erreger kann in Amöben und in einem Biofilm vorkommen und dadurch höhere Temperaturen aushalten.
    kategorie: vorkommen hygkowichtig
    quellename: RKI Ratgeber
  - id: vorkommen_besonderheit
    text: Besonders Hotels, in denen die Duschen nicht regelmäßig gespült werden, sind für Infektionen bekannt.
    kategorie: vorkommen

# Zeiten
  - id: inkubationszeit
    text: Die Inkubationszeit beträgt im Regelfall 2-10 Tage. In Ausbrüchen sind Inkubationszeiten bis 26 Tage beschrieben. Pontiac-Fieber kann schon 5 Stunden nach der Infektion beginnen.
    kategorie: zeiten hygkowichtig
  - id: inkubationszeit_min
    text:
    nummer: 2
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
    nummer: 26
  - id: ansteckungszeit_normal
    text: Menschen sind üblicherweise nicht ansteckend.
    kategorie: zeiten hygkowichtig
  - id: ansteckungszeit_lang
    text:
    kategorie: zeiten
    quellename: RKI Ratgeber


# Übertragungswege
  - id: uebertragungswege
    text: |
      Der Erreger wird üblicherweise über aerosoliertes Wasser übertragen. Er kann auch über eine Mikroaspiration nach dem Trinken übertragen werden. Eine Mensch-zu-Mensch Übertragung wurde nur einmal beschrieben. Kühltürme können Legionellen großflächig verbreiten.
    kategorie: uebertragungswege hygkowichtig
    quellename: RKI Ratgeber


# Klinik
  - id: symptome
    text: |
      Das Vollbild der Legionellose beinhaltet eine schwere Lungenentzündung. Pontiac-Fieber ist eine akuter vorübergehender fieberhafter Infekt (möglicherweise eine "toxische" Erkrankung).
    kategorie: klinik
  - id: komplikationen
    text:
    kategorie: klinik
  - id: krankheitsdauer
    text:
    kategorie: klinik
  - id: asymptomatik
    text: Asymptomatische Fälle kommen vor.
    kategorie: klinik
  - id: letalität
    text: Etwa 10% der Personen, die eine Legionellosen-Pneumonie entwickeln versterben.
    kategorie: klinik


# Diagnose
  - id: hauptdiagnose
    text: Wichtigste Untersuchungsmethode ist die Urinuntersuchung, die allerdings nur Pneumophila Gruppe 1 findet
    kategorie: diagnostic
  - id: kultur
    text: Goldstandard ist die Anlage einer Kultur aus einer Atemwegsprobe. Dadurch kann auch der genau Subtyp ermittelt werden.
    kategorie: diagnostic

# Meldung
  - varname: IFSG_7

aktionsbausteine:
  - varname: INFOMANAGEMENT
  - varname: AUSBRUCHSUNTERSUCHUNG
  - aktion: Verwendung des Legionellose-Musterfragebogens des RKI
  - aktion: Unterrichtung der Immissionsschutzbehörde
  - aktion: Suche nach einer Quelle durch Zweck C und Zweck B Untersuchung, dann ggf. eine Gefährungsbeurteilung.   

interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: ERKRANKUNGSBEGINN
  - varname: AUSBRUCHSABKLAERUNG
  - varname: HOSPITALISIERUNG
  - varname: ORT
  - varname: AUSLANDSAUFENTHALT

quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Legionellose.html
  - name: Sonderseite des Robert Koch-Instituts zur Untersuchung bei Legionellosen
    webseite: https://www.rki.de/DE/Content/InfAZ/L/Legionellose/OEGD/Dokumente_Tab.html
  - name: Empfehlungen des Umweltbundesamtes zur Untersuchung von Legionellen im Trinkwasser
    webseite: https://www.umweltbundesamt.de/themen/uba-empfehlung-zur-untersuchung-von-legionellen-im
  - name: DVGW Seite zum Thema Legionellen
    webseite: https://www.dvgw.de/themen/wasser/wasserqualitaet/legionellen/
  - name: European center for diesease control (englisch)
    webseite: https://www.ecdc.europa.eu/en/legionnaires-disease
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Legionellose
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/legionella/index.html
  - name: World-Health-Organisation (englisch)
    webseite: https://www.who.int/news-room/fact-sheets/detail/legionellosis
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Legionellosis%22%5BMesh%5D
---
