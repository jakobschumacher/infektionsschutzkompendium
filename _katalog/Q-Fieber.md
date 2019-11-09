---
title: Q-Fieber
layout: post
fortbildung: fortbildung/Q-Fieber.html

author: Jakob Schumacher

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/b/ba/Coxiella_burnetii_01.JPG
  bildcredits: https://commons.wikimedia.org/wiki/File:Coxiella_burnetii_01.JPG
  bildautor: Rocky Mountain Laboratories, NIAID, NIH 
  kurzbeschreibung: Q-Fieber ist eine Zoonose, die grippeähnliche Symptome verursacht. Sie tritt in Gebieten mit Schafshaltung auf. Der Erreger ähnelt der Legionellose.

inhalte:  
# Erregerdaten
  - id: erregername
    text: Die Infektionskrankheit Q-Fieber wird durch den Erreger Coxiella burnetii hervorgerufen. 
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium. 
    kategorie: erregerdaten
  - id: erregergruppen
    text: 
    quellename: RKI-Ratgeber 
    kategorie: erregerdaten
  - id: toxine
    text: 
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: 
    kategorie: erregerdaten
    
# Vorkommen
  - id: vorkommen_deu
    text: Ungefähr 100 Fälle werden in Deutschland gemeldet.
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor (außer Neuseeland und Antarktis)
    kategorie: vorkommen
  - id: reservoir
    text: Der Erreger kommt in insbesondere in Schafen und Ziegen und anderen Paarhufern vor. Zusätzlich kommt der Erreger in Zecken vor. Viele weitere Tierarten können betroffen sein
    kategorie: vorkommen
    quellename: RKI Ratgeber
  - id: umweltresistenz
    text: Der Erreger bildet Dauerformen und ist sehr umweltresistent 
    kategorie: vorkommen hygkowichtig
    quellename: RKI Ratgeber 

    
# Zeiten
  - id: inkubationszeit
    text: Eine Inkubationszeit beträgt im Regelfall 2 bis 3 Wochen
    kategorie: zeiten, hygkowichtig
  - id: inkubationszeit_min
    text: 
    nummer: 14
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
    nummer: 21
  - id: ansteckungszeit_normal
    text: Menschen sind üblicherweise nicht ansteckend
    kategorie: zeiten hygkowichtig
  - id: ansteckungszeit_lang 
    text: 
    kategorie: zeiten
    quellename: RKI Ratgeber
  - id: saisonalitaet
    text: Saisonaler Gipfel ist von Juni bis August
    quelleurl: https://www.survstat.rki.de
    kategorie: zeiten

# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird meist über Staub übertragen, dabei kann der Abstand zwischen Quelle und Infektionsort 2km betragen. Ein direkter Kontakt zu Tieren ist ebenfalls ein relevanter Übertragungsweg. Selten kommt vor eine Übertragung durch Lebensmittel, während der Schwangerschaft oder von Mensch-zu-Mensch. Zecken übertragen Q-Fieber nicht auf Menschen.
    kategorie: uebertragungswege 
    quellename: RKI Ratgeber
    

# Klinik
  - id: symptome
    text: |
      Typische Krankheitszeichen sind Zeichen eines grippalen Infekts: hohes Fieber, Muskelschmerzen, Stirnkopfschmerzen, Pneumonie und Hepatitis. Bei Schwangeren kann es zu Aborten kommen. 
    kategorie: klinik
  - id: komplikationen
    text: Es kann zu einer chronischen Infektion kommen. Dann persistiert der Erreger in verschiedenen Organen. Häufig ist eine Herzklappenentzündung.
    kategorie: klinik
  - id: krankheitsdauer
    text: 
    kategorie: klinik
  - id: asymptomatik
    text: 50 von 100 Menschen haben keine Krankheitszeichen.
    kategorie: klinik
  - id: letalität
    text: 
    kategorie: klinik

# Meldung
  - varname: IFSG_7

aktionsbausteine:
  - varname: GETINFO
  - varname: UEBERMITTLUNG
  - varname: AUSBRUCHSUNTERSUCHUNG
  - varname: UNTERRICHTUNG_GA
  - varname: UNTERRICHTUNG_VET
  - aktion: Risikopersonen (Schwangere, Personen mit Herzklappen) sollten in spezialisierter ärztlicher Behandlung sein und ggf. prophylaktische Antibiotika bekommen.
  - aktion: Schwangere Personen sollten bei der Geburt bestimmten Isolierungsmaßnahmen unterliegen.

interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: ERKRANKUNGSBEGINN
  - varname: AUSBRUCHSABKLAERUNG
  - varname: HOSPITALISIERUNG
  - question: Waren Sie 2-3 Wochen vor der Erkrankung im Kontakt oder in der Nähe von Schafen/Ziegen oder Rindern
    comment: Wenn dies der Fall ist, sollte eine Meldung an das zuständige Veterinäramt erfolgen. 
    kategorie: abklaerung
  - question: Haben Sie 2-3 Wochen vor Erkrankungsbeginn rohes Fleisch von Schafen, Ziegen oder Rindern gegessen.
    kategorie: abklaerung

quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Q-Fieber.html#doc2398338bodyText4
  - name: European center for diesease control (englisch)
    webseite: https://www.ecdc.europa.eu/en/q-fever
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Q-Fieber
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/qfever/index.html
  - name: Public health england (englisch)
    webseite: https://www.gov.uk/guidance/q-fever
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Q+Fever%22%5BMesh%5D
---
