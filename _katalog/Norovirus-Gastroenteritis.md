---
title: Norovirus-Gastroenteritis
layout: post
lastupdated: 11. Oktober 2019
author: Jakob Schumacher

fortbildung: fortbildung/Norovirus-Gastroenteritis.html
aktionen: aktionen/Norovirus-Gastroenteritis.html

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/a/ae/Norovirus_4.jpg
  bildcredits: https://commons.wikimedia.org/wiki/File:Norovirus_4.jpg
  bildautor: Wikipedia/Graham Beards
  kurzbeschreibung: Norovirus ist der häufigste meldepflichtige Erreger, dementsprechend ist die Ermittlung durch die Gesundheitsämter sehr häufig. Norovirus ist für viele Todesfälle in Ländern mit einem anderen Entwicklungsstadium verantwortlich.

inhalte:  
# Erregerdaten
  - id: erregername
    text: Die Infektionskrankheit Norovirus-Gastroenteritis wird hervorgerufen durch Norovirus.
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Virus.
    kategorie: erregerdaten
  - id: erregergruppen
    text: Der Erreger wird unterteilt in die Genogruppen I - V und diese wiederum in Genotypen. 
    kategorie: erregerdaten
  - id: toxine
    text: 
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: Genogruppe III und V verursachen beim Menschen keine Erkrankung. Anhand der Genogruppe kann etwas über die Herkunft des Erregers gesagt werden.
    kategorie: erregerdaten
    
# Vorkommen
  - id: vorkommen_deu
    text: 80.000 Fälle werden in Deutschland gemeldet.
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor.
    kategorie: vorkommen
  - id: reservoir
    text: Das einzig relevante Reservoir ist der Mensch. 
    kategorie: vorkommen
  - id: umweltresistenz
    text: Der Erreger ist sehr umweltresistent
    kategorie: vorkommen  hygkowichtig
    
# Zeiten
  - id: inkubationszeit_false
    text: Die Inkubationszeit beträg 6 bis 48 Stunden
    kategorie: zeiten, hygkowichtig
  - id: inkubationszeit_min
    nummer: 0.25
    kategorie: zeiten
  - id: inkubationszeit_max
    nummer: 2
    kategorie: zeiten
  - id: ansteckungszeit_normal
    text: Solange eine Person erkrankt ist und noch Wochen danach scheidet sie den Erreger aus (aus pragmatischen Gründen wird empfohlen die Isolierungsmaßnahmen 48h nach Ende der Symptome aufzuheben)
    kategorie: zeiten hygkowichtig
  - id: ansteckungszeit_lang 
    text: Erkrankte Personen, insbesondere Personen mit Immunschwäche können den Erreger noch lange Zeit ausscheiden
    kategorie: zeiten
  - id: saisonalitaet
    text: Saisonaler Gipfel ist von Oktober bis März
    kategorie: zeiten

# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird übertragen 
      Von Mensch-zu-Mensch über Hände,
      über Lebensmittel, 
      über Trinkwasser,
      über Erbrochenes (Tröpfchen).
    kategorie: uebertragungswege hygkowichtig

# Klinik
  - id: symptome
    text: Krankheitszeichen sind schwallartiges Erbrechen, wässriger Durchfall, ein akutem Beginn, einem starken Krankheitsgefühl und leichtem Fieber. 
    kategorie: klinik hygkowichtig
  - id: komplikationen
    text: Komplikation ist insbesondere die Dehydratation.
    kategorie: klinik
  - id: krankheitsdauer
    text: Die Krankheitsdauer beträgt üblicherweise 12-48 Stunden.
    kategorie: klinik hygkowichtig
  - id: asymptomatik
    text: Etwa 4 von 100 Europäern sind asymptomatisch
    kategorie: klinik
  - id: letalität
    text: 7,5 auf 100.000 Personen versterben.
    nummer: 7.5
    quelle: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2873766/
    kategorie: klinik


# Meldung
  - varname: IFSG_6_1_2
  - varname: IFSG_7
  - varname: IFSG_34 



aktionsbausteine:
  - varname: GETINFO
  - varname: UEBERMITTLUNG
  - varname: AUSBRUCHSUNTERSUCHUNG
  - varname: UNTERRICHTUNG_GA
  - varname: UNTERRICHTUNG_LEB
  - varname: KUECHENHYGIENE
  - varname: TOILETTENHYGIENE
  - varname: HAENDEHYGIENE
  - varname: WAESCHEHYGIENE
  - varname: ISOLIERUNG
  - aktion: Weitere Verhaltenshinweise an betroffene Einrichtungen
    beschreibung: | 
      Je nach Schwere der Situation sollte eine Einrichtung weitere Maßnahmen unternehmen: 
      * Umstellung auf viruzides oder viruzid-plus Mittel 
      * Atemschutz bei Erbrochenem 
      * Minimierung von Personalbewegung
      * vermehrte Desinfektion und Reinigung im betroffenen Bereich.
      
interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: ERKRANKUNGSBEGINN
  - varname: AUSBRUCHSABKLAERUNG
  - varname: IN33EINRICHTUNG
  - varname: IN36EINRICHTUNG
  - varname: IN23EINRICHTUNG
  - varname: LEBENSMITTELARBEIT
  - varname: HOSPITALISIERUNG
  - question: Haben Sie Tiefkühlerdbeeren zu sich genommen?
    comment: Sofern dies in der Inkubationszeit zu sich genommen wurde sollte der genaue Name des Produktes und weitere Informationen in einen öffentlichen Kommentar eingetragen werden.
  - question: Haben Sie Muscheln zu sich genommen?
    comment: Sofern dies in der Inkubationszeit zu sich genommen wurde sollte der genaue Name des Produktes bzw. der Verzehrsort und weitere Informationen in einen öffentlichen Kommentar eingetragen werden.

quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Noroviren.html
  - name: Erregersteckbrief
    webseite: https://www.infektionsschutz.de/erregersteckbriefe/noroviren/
  - name: European center for diesease control (englisch)
    webseite: https://ecdc.europa.eu/en/norovirus-infection
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Humane_Noroviren
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/norovirus/about/index.html
  - name: Public health england (englisch)
    webseite: https://www.gov.uk/government/collections/norovirus-guidance-data-and- - analysis
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Norwalk+virus%22%5BMesh%5D
---
