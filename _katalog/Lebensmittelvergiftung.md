---
title: Lebensmittelvergiftung
layout: post
fortbildung: fortbildung/Lebensmittelvergiftung.html

author: Jakob Schumacher

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/5/57/Staphylococcus_aureus_01.jpg
  kurzbeschreibung: Lebensmittelvergiftungen entstehen, wenn Toxine mit dem Essen aufgenommen werden. Es kommt zu keiner Vermehrung eines Erregers im Menschen.

inhalte:  
# Erregerdaten
  - id: erregername
    text: Lebensmittelvergiftung wird durch diverse Bakterien hervorgerufen. Häufig sind Staphylokokkus aureus, Bacillus cereus, Clostridium perfringens.
    kategorie: erregerdaten
  - id: erregertyp
    text: 
    kategorie: erregerdaten
  - id: erregergruppen
    text: 
    quellename: RKI-Ratgeber 
    kategorie: erregerdaten
  - id: toxine
    text: Es gibt unterschiedliche Toxine. Üblicherweise werden diese in hitzestabile und hitzelabile Toxine unterteilt.
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: 
    kategorie: erregerdaten
    
# Vorkommen
  - id: vorkommen_deu
    text: 
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Die Erkrankung kommt weltweit vor.
    kategorie: vorkommen
  - id: reservoir
    text: 
    kategorie: vorkommen
    
    
# Zeiten
  - id: inkubationszeit
    text: Eine Inkubationszeit kann 1h - 16h sein.
    kategorie: zeiten, hygkowichtig
  - id: inkubationszeit_min
    text: 
    nummer: 0.05
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
    nummer: 0.75
  - id: ansteckungszeit_normal
    text: 
    kategorie: zeiten hygkowichtig
  - id: ansteckungszeit_lang 
    text: 
    kategorie: zeiten
    
  - id: saisonalitaet
    text: 
    kategorie: zeiten

# Übertragungswege
  - id: uebertragungswege
    text: | 
      Auf Lebensmittel lebende Bakterien produzieren Toxine. Die Toxine verursachen nach ihrer Aufnahme eine Gastroenteritis. 
    kategorie: uebertragungswege hygkowichtig
    

# Klinik
  - id: symptome
    text: Typische Krankheitszeichen sind Durchfall, Bauchschmerzen und Erbrechen. Fieber ist selten. Der Durchfall ist nicht blutig. 
    kategorie: klinik
  - id: komplikationen
    text: 
    kategorie: klinik
  - id: krankheitsdauer
    text: Die Erkrankung dauert im üblichen Fall wenige Stunden bis max. 2 Tage.
    kategorie: klinik
  - id: asymptomatik
    text: 
    kategorie: klinik
  - id: letalität
    text: 
    kategorie: klinik

# Meldung
  - varname: IFSG_6_1_2
  - varname: IFSG_7
  - varname: IFSG_34 

aktionsbausteine:
  - varname: GETINFO
  - varname: AUSBRUCHSUNTERSUCHUNG
  - varname: UNTERRICHTUNG_GA
  - varname: UNTERRICHTUNG_LEB
  - varname: KUECHENHYGIENE
  
interview:  
  - question: Ein Interview ist nur selten notwendig

quellen:
---
