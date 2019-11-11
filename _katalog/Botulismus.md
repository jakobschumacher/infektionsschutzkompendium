---
title: Botulismus
layout: post
fortbildung: fortbildung/Botulismus.html
aktionen: aktionen/Botulismus.html

author: Jakob Schumacher

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/f/f0/Clostridium_botulinum.jpg
  bildcredits: https://commons.wikimedia.org/wiki/File:Clostridium_botulinum.jpg
  bildautor: CDC
  kurzbeschreibung: Botulismus ist eine besondere Form der Lebensmittelvergiftung. Nur in seltenen Fällen kommt es zu einer Infektion.

inhalte:  
# Erregerdaten
  - id: erregername
    text: Botulismus wird durch ein Toxin des Erreger Clostridium Botulinum hervorgerufen. 
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium. 
    kategorie: erregerdaten
  - id: erregergruppen
    text:  
    quellename: RKI-Ratgeber 
    kategorie: erregerdaten
  - id: toxine
    text: Clostridium botulinum produziert Toxine, die die Erkrankung hervorrufen. 
    kategorie: erregerdaten hygkowichtig
  - id: erregergruppenunterschiede
    text: 
    kategorie: erregerdaten
  - id: alternativenamen
    text: Fleischvergiftung, Wurstvergiftung, Allantiasis
    kategorie: erregerdaten
    
# Vorkommen
  - id: vorkommen_deu
    text: In Deutschland werden etwa 10 Fälle pro Jahr gemeldet
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor.
    kategorie: vorkommen
  - id: reservoir
    text: Der Erreger kommt ubiquitär im Boden vor.
    kategorie: vorkommen
    quellename: RKI Ratgeber
  - id: umweltresistenz
    text: 
    kategorie: vorkommen 
    quellename: RKI Ratgeber 

    
# Zeiten
  - id: inkubationszeit
    text: Die Latenzzeit beträgt wenige Stunden bis 8 Tage. Bei einem Säuglingsbotulismus oder Wundbotulismus beträgt die Inkubationszeit zwischen 4 und 14 Tagen.
    kategorie: zeiten
  - id: inkubationszeit_min
    text: 
    nummer: 0.1
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
    nummer: 8
  - id: ansteckungszeit_normal
    text: Eine Ansteckung von Mensch zu Mensch ist theoretisch nur bei Infektionen möglich.
    kategorie: zeiten 
  - id: ansteckungszeit_lang 
    text: 
    kategorie: zeiten

  
# Übertragungswege
  - id: uebertragungswege
    text: | 
      Bei Lebensmittelbotulismus erfolgt die Aufnahme des Giftes über Lebensmittel in denen sich Clostridium boltulinum unter Luftabschluss vermehren kann. Bei Wundbotulismus erfolgt die Infektion meist nach Injektion, z.B. bei Drogengebrauch. Nach der Aufnahme von belasteten Lebensmittel können sich die Erreger im Darm von Nicht-Immunkompetenten vermehren. 
    kategorie: uebertragungswege hygkowichtig
    quellename: RKI Ratgeber
    

# Klinik
  - id: symptome
    text: |
      Das Toxin führt zu einer absteigenden symmetrischen Lähmung. Beginnend mit den Kopfnerven. Die Lähmung dauert monatelang
    kategorie: klinik
  - id: komplikationen
    text: Es kann eine Atemlähmung und in Folge dessen der Tod eintreten.
    kategorie: klinik
  - id: krankheitsdauer
    text: 
    kategorie: klinik
  - id: asymptomatik
    text: 
    kategorie: klinik
  - id: letalität
    text: Unter Behandlung versterben weniger als 10% der erkrankten Personen.
    kategorie: klinik
    quelleurl: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5460764/

# Meldung
  - varname: IFSG_6_1_1
  - varname: IFSG_7

aktionsbausteine:
  - varname: GETINFO
  - varname: UEBERMITTLUNG
  - varname: AUSBRUCHSUNTERSUCHUNG
  - varname: UNTERRICHTUNG_GA
  - varname: UNTERRICHTUNG_LEB

interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: ERKRANKUNGSBEGINN
  - varname: AUSBRUCHSABKLAERUNG
  - varname: HOSPITALISIERUNG
  - question: Welche Produkte haben Sie vor der Erkrankung zu sich genommen?
    comment: Aufgrund der schwere der Erkrankung ist es sehr wichtig, das betroffene Lebensmittel herauszufinden. 
  
quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Botulismus.html
  - name: Bundesamt für Risikobewertung
    webseite: https://www.bfr.bund.de/de/fragen_und_antworten_zu_botulismus-70355.html  
  - name: European center for diesease control (englisch)
    webseite: https://ecdc.europa.eu/en/botulism
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Botulismus
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/botulism/index.html
  - name: Public Health-England (englisch)
    webseite: https://www.gov.uk/government/publications/botulism-clinical-and-public-health-management/botulism-clinical-and-public-health-management
  - name: World-Health-Organisation (englisch)
    webseite: https://apps.who.int/iris/bitstream/handle/10665/42667/WHO_CDS_CSR_EPH_2002.23.pdf;jsessionid=23DDE9D9F7F66F977B4701E5D332E6CA?sequence=1
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Botulism%22%5BMesh%5D
  - name: AWMF
    webseite: https://www.awmf.org/uploads/tx_szleitlinien/030-109l_S1_Botulismus_2017-11.pdf
  - name: Apothekenumschau
    webseite: https://www.apotheken-umschau.de/Botulismus
---

