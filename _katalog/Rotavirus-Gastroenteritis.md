---
title: Rotavirus-Gastroenteritis
layout: post
lastupdated: 25. Oktober 2019
author: Jakob Schumacher

fortbildung: fortbildung/Rotavirus-Gastroenteritis.html

basisdaten:
  bild: https://de.wikipedia.org/wiki/Humane_Rotaviren#/media/Datei:Rotavirus_TEM_B82-0337_lores.jpg
  bildcredits: https://commons.wikimedia.org/wiki/File:Rotavirus_TEM_B82-0337_lores.jpg
  bildautor: CDC/Dr. Erskine Palmer 
  kurzbeschreibung: Rotavirus ist eine häufige Durchfallerkrankung, die insbesondere bei Kindern vorkommt. In Ländern mit einem niedrigeren mittleren Einkommen gibt es viele Todesfälle. 

inhalte:  
# Erregerdaten
  - id: erregername
    text: Rotavirus-Gastroenteritis wird hervorgerufen durch den Rotavirus. Rotavirus gehört zu den Reoviridae.
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Virus.
    kategorie: erregerdaten
  - id: erregergruppen
    text: Der Erreger wird in sieben Serogruppen unterteilt. Man unterscheidet G-Typen und P-Typen.
    kategorie: erregerdaten
  - id: toxine
    text: 
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: 
    kategorie: erregerdaten
    
# Vorkommen
  - id: vorkommen_deu
    text: Etwa 30.000 Fälle werden in Deutschland gemeldet.
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor.
    kategorie: vorkommen
  - id: reservoir
    text: Das wichtigste Reservoir ist der Mensch, der Erreger kann allerdings auch bei Tieren gefunden werden.
    kategorie: vorkommen  hygkowichtig
  - id: umweltresistenz
    text: Der Erreger ist sehr umweltresistent
    kategorie: vorkommen  hygkowichtig
    
# Zeiten
  - id: inkubationszeit
    text: Die Inkubationszeit beträgt 1 bis 3 Tage
    kategorie: zeiten  hygkowichtig
  - id: inkubationszeit_min
    nummer: 1
    kategorie: zeiten
  - id: inkubationszeit_max
    nummer: 3
    kategorie: zeiten
  - id: ansteckungszeit_normal
    text: Üblicherweise wird der Erreger nicht länger als 8 Tage mit dem Stuhl ausgeschieden
    kategorie: zeiten
  - id: ansteckungszeit_lang 
    text: Frühgeborene und Immungeschwächte können den Erreger noch lange Zeit ausscheiden
    kategorie: zeiten


    # Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird übertragen 
      Von Mensch-zu-Mensch über eine Schmierinfektion häufig also Hände,
      über Lebensmittel, 
      über Trinkwasser.
    kategorie: uebertragungswege  hygkowichtig

# Klinik
  - id: symptome
    text: Krankheitszeichen sind wässriger Durchfall und Erbrechen. In etwa der Hälfte der Fälle sind unspezifische Krankheitszeichen der Atemwege zu finden.
    kategorie: klinik hygkowichtig
  - id: komplikationen
    text: Komplikationen ist insbesondere die Dehydratation
    kategorie: klinik
  - id: krankheitsdauer
    text: Die Krankheitsdauer beträgt üblicherweise 2-6 Tage
    kategorie: klinik  hygkowichtig
  - id: asymptomatik
    text: Viele erkranken mit nur geringen oder keinen Symptomen. Insbesondere Erwachsene haben häufig keine Symptome. 
    kategorie: klinik  hygkowichtig
  - id: letalität
    text: 0,1 auf 100.000 Personen versterben.
    nummer: 0.1
    quelle: https://www.who.int/immunization/monitoring_surveillance/burden/estimates/rotavirus/en/
    kategorie: klinik
      
# Impfung
  - id: impfung
    text: Es existiert ein Impfstoff gegen die Erkrankung
    kategorie: impfen
  - id: Impfempfehlung
    text: Die Impfung wird empfohlen für alle Kinder in den ersten Lebenswochen.
    kategorie: impfen  hygkowichtig

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
      Je nach Schwere der Situation sollte eine Einrichtung weitere Maßnahmen unternehmen: Umstellung auf viruzides oder viruzid-plus Mittel, Atemschutz bei Erbrochenem oder Stuhl, Minimierung von Personalbewegung, vermehrte Desinfektion und Reinigung im betroffenen Bereich.
    
interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: ERKRANKUNGSBEGINN
  - varname: AUSBRUCHSABKLAERUNG
  - varname: IN33EINRICHTUNG
  - varname: IN36EINRICHTUNG
  - varname: IN23EINRICHTUNG
  - varname: LEBENSMITTELARBEIT
  - varname: HOSPITALISIERUNG

quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Rotaviren.html
  - name: Erregersteckbrief
    webseite: https://www.infektionsschutz.de/erregersteckbriefe/rotaviren/
  - name: European center for diesease control (englisch)
    webseite: https://ecdc.europa.eu/en/rotavirus-infection
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Humane_Rotaviren
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/rotavirus/about/index.html
  - name: Public health england (englisch)
    webseite: https://www.gov.uk/government/collections/rotavirus-guidance-data-and-analysis
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Rotavirus+Infections%22%5BMesh%5D
---
