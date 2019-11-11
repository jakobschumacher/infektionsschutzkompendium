---
title: Eschericha-Coli-Enteritis
layout: post
date: 2019-02-08
fortbildung: fortbildung/Eschericha-Coli-Enteritis.html
aktionen: aktionen/Eschericha-Coli-Enteritis.html

lastupdated: 22. Oktober 2019
author: Jakob Schumacher

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/EscherichiaColi_NIAID.jpg/800px-EscherichiaColi_NIAID.jpg
  bildcredits: https://commons.wikimedia.org/wiki/File:EscherichiaColi_NIAID.jpg
  bildautor: Rocky Mountain Laboratories, NIAID, NIH
  kurzbeschreibung: Eschericha Coli ist ein Darmbwohner. Durch Toxine kann er Erkrankungen auslösen. Er kann in mehreren Kategorien gemeldet werden.

inhalte:  
# Erregerdaten
  - id: erregername
    text: E.Coli kann durch bestimmte Toxine eine E.Coli-Enteritis auslösen.
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium. 
    kategorie: erregerdaten
  - id: erregergruppen
    text:  
    quellename: RKI-Ratgeber 
    kategorie: erregerdaten hygkowichtig
  - id: toxine
    text: E. Coli kann die Eigenschaft erwerben bestimmte Toxine zu bilden. Bei bestimmten Toxinen wird dem Erreger dann ein spezieller Name zugeschrieben. ETEC (produziert Enterotoxin), EHEC (produziert Shigatoxin), EPEC (produziert EAF), EAEC (produziert aggregierende Enterotoxine), EIEC (produziert invasive Enterotoxine). 
    kategorie: erregerdaten hygkowichtig
  - id: erregergruppenunterschiede
    text: Insbesondere EHEC die Shigatoxin 2 produzieren, können ein Hämolytisch-Urämisches-Syndrom hervorrufen. 
    kategorie: erregerdaten hygkowichtig
  - id: besonderheiten
    text: |
      Ein E.Coli kann in vier Meldekategorien erscheinen 
      * Als enterotoxischer Erreger wenn EPEC/ETEC/EIEC usw. vorliegt
      * Als EHEC wenn ein EHEC vorliege
      * Als HUS wenn ein EHEC, der ein HUS verursacht hat, vorliegt
      * Als Enterobacteriacae mit bestimmten Reistenzen (MRGN) wenn ein resistenzverursachendes Gen vorliegt
    kategorie: erregerdaten hygkowichtig
    
    
# Vorkommen
  - id: vorkommen_deu
    text: In Deutschland werden etwa 1500 Fälle an EHEC jährlich gemeldet und etwas weniger als 100 HUS Fälle.
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: E.Coli kommt weltweit vor.
    kategorie: vorkommen
  - id: reservoir
    text: E.Coli ist ein normaler Darmbewohner des Menschen und vieler Tiere. Erkrankungen durch E.Coli mit Toxinen kommen weltweit vor. Wiederkäuer (z.B. Rinder, Schafe, Ziegen) sind ein wichtiges Reservoir.
    kategorie: vorkommen hygkowichtig
    quellename: RKI Ratgeber
  - id: umweltresistenz
    text: Der Erreger ist sehr umweltresistent
    quellename: RKI Ratgeber

# Übertragungswege
  - id: uebertragungswege
    text: | 
      EHEC wird übertragen durch direkten Kontakt zu Wiederkäuern, über Lebensmittel wie z.B. Lammfleisch und Rohwurst, aber auch Salate und Rohmlich. Mensch-zu-Mensch Übertragungen sind im Vergleich zu anderen bakteriellen Durchfallerregern häufiger.
      In Ländern mit einem niedrigeren Hygienestandard auch über Trinkwasser oder Baden. ETEC, EPEC und andere werden ebenfalls über Lebensmittel, Wasser und von Mensch-zu-Mensch übertragen.
    kategorie: uebertragungswege hygkowichtig
    quellename: RKI Ratgeber
    
# Zeiten
  - id: inkubationszeit
    text: Eine Inkubationszeit beträgt im Regelfall 2 bis 10 Tage. Ein HUS beginnt gegebenenfalls 5 bis 12 Tage nach dem Erkrankungsbeginn
    kategorie: zeiten hygkowichtig
  - id: inkubationszeit_min
    text: 
    nummer: 2 
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
    nummer: 10 
  - id: ansteckungszeit_normal
    text: Solange die Person erkrankt ist scheidet sie den Erreger aus. Auch nach dem Ende der Symptome kann der Erreger über Wochen ausgeschieden werden.
    kategorie: zeiten hygkowichtig
  - id: ansteckungszeit_lang 
    text: 
    kategorie: zeiten
    quellename: RKI Ratgeber
    
# Klinik
  - id: symptome
    text: Die Krankheitssymptome hängen vom Toxin ab. Üblich ist ein wässriger Durchfall mit Übelkeit, Erbrechen und Abdominalschmerzen
    kategorie: klinik
  - id: komplikationen
    text: Komplikationen sind hämorrhagische Colitis und ein Hämolytisch-Urämisches-Syndrom
    kategorie: klinik hygkowichtig
  - id: krankheitsdauer
    text: 
    kategorie: klinik
  - id: asymptomatik
    text: Infektionen mit einem Toxin-produzierenden E.Coli können ohne Krankheitszeichen verlaufen.
    kategorie: klinik hygkowichtig
  - id: letalität
    text: 
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
  - varname: TV34
  - varname: TV42
  - varname: ESSENAUFREISEN
  - aktion:  Händewaschen nach dem Berühren von möglicherweise belasteten Tieren. 
    beschreibung: Dies gilt z.B. für Streichelzoos oder ähnliches und geschieht zur Verhinderung zukünftiger Fälle. 
  - aktion: EHEC bzgl. HUS aufklären
    beschreibung: An EHEC erkrankte Personen sollten darauf hingewiesen, dass sie möglicherweise ein Hämolytisch-Urämisches-Syndrom entwickeln können.

interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: ERKRANKUNGSBEGINN
  - varname: AUSBRUCHSABKLAERUNG
  - varname: IN33EINRICHTUNG
  - varname: IN36EINRICHTUNG
  - varname: KONTAKTIN33
  - varname: LEBENSMITTELARBEIT
  - varname: AUSLANDSAUFENTHALT
  - varname: ROHMLICH
  - question: Waren sie vor Erkrankungsbeginn im Kontakt mit Wiederkäuern?
    comment: Wiederkäuer sind Rinder, Schafen, Ziegen und ähnliche Tiere. Wenn dies in der Inkubationszeit erfolgt ist sollte das zuständige Veterinäramt informiert werden.
    kategorie: abklaerung 
    keyword: Wiederkäuer

quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Campylobacter.html
  - name: Erregersteckbrief
    webseite: https://www.infektionsschutz.de/erregersteckbriefe/campylobacter/
  - name: European center for diesease control (englisch)
    webseite: https://ecdc.europa.eu/en/campylobacteriosis
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Campylobacter-Enteritis
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/campylobacter/index.html
  - name: Public health england (englisch)
    webseite: https://www.gov.uk/government/collections/campylobacter-guidance-data-and-analysis
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Campylobacter+Infections%22%5BMesh%5D
---
