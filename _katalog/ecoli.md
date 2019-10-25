---
title: E.Coli-Enteritis
layout: post
date: 2019-02-08
fortbildung: fortbildung/ecoli-enteritis.html

lastupdated: 22. Oktober 2019
author: Jakob Schumacher

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/EscherichiaColi_NIAID.jpg/800px-EscherichiaColi_NIAID.jpg
  kurzbeschreibung: Eschericha Coli ist ein Darmbwohner. Durch Toxine kann er Erkrankungen auslösen. Er kann in mehreren Kategorien gemeldet werden.

inhalte:  
# Erregerdaten
  - id: erregername
    text: E.Coli kann durch bestimmte Toxine eine E.Coli-Enteritis auslösen
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium. 
    kategorie: erregerdaten
  - id: erregergruppen
    text: E. Coli kann die Eigenschaft erwerben bestimmte Toxine zu bilden. Bei bestimmten Toxinen wird dem Erreger dann ein spezieller Name zugeschrieben. ETEC (produziert Enterotoxin), EHEC (produziert Shigatoxin), EPEC (produziert EAF), EAEC (produziert aggregierende Enterotoxine), EIEC (produziert invasive Enterotoxine).  
    quellename: RKI-Ratgeber 
    kategorie: erregerdaten hygkowichtig
  - id: toxine
    text: 
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: EHEC die Shigatoxin 2 produzieren können ein Hämolytisch-Urämisches-Syndrom hervorrufen
    kategorie: erregerdaten
    
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
    text: E.Coli ist ein normaler Darmbewohner des Menschen und vieler Tiere. Erkrankungen durch E.Coli mit Toxinen kommen weltweit vor
    kategorie: vorkommen
    quellename: RKI Ratgeber
  - id: ueberlebensfaehigkeit
    text: 
    quellename: RKI Ratgeber
    
# Zeiten
  - id: inkubationszeit
    text: Eine Inkubationszeit beträgt im Regelfall 2-5 Tage
    kategorie: zeiten
  - id: inkubationszeit_min
    text: 
    nummer: 1 Tag
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
    nummer: 10 Tage
  - id: ansteckungszeit_normal
    text: Solange die Person erkrankt ist scheidet sie den Erreger aus. Auch nach dem Ende der Symptome wird der Erreger über Wochen ausgeschieden
    kategorie: zeiten
  - id: ansteckungszeit_lang 
    text: Immungeschwächte Personen können den Erreger noch lange Zeit ausscheiden
    kategorie: zeiten
    quellename: RKI Ratgeber
    quelleurl: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Campylobacter.html

# Klinik
  - id: symptome
    text: Typisch sind Prodromi vor dem Auftreten des Durchfalls. Der Durchfall kann auch blutig sein
    kategorie: klinik
  - id: komplikationen
    text: Komplikationen sind Gelenkentzündungen, ein Guillan-Barré-Syndrom. Diskutiert werden Reizdarmsyndrom und chronisch-entzündliche Darmerkrankungen.
    kategorie: klinik
  - id: krankheitsdauer
    text: Die Erkrankung dauert im üblichen Fall eine Woche
    kategorie: klinik
  - id: asymptomatik
    text: Viele Infektionen verlaufen ohne Krankheitszeichen.
    kategorie: klinik
  - id: letalität
    text: 
    kategorie: klinik

# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger würde übertragen 
      über Lebensmittel insbesondere Geflügelfleisch, Rohmlich, anderes Fleisch 
      vor allem in anderen Ländern auch über Trinkwasser oder Baden. Bei C. fetus kann eine Mutter ihr Kind intrauterin oder perinatal infizieren.
    kategorie: uebertragungswege
    quellename: RKI Ratgeber
    quelleurl: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Campylobacter.html

# Meldung
  - id: Meldepflicht
    text: Ein Labornachweis von Campylobacter ist meldepflichtig.
    quellename: IfSG
    quelleurl: https://www.gesetze-im-internet.de/ifsg
    kategorie: meldepflicht

aktionsbausteine:
  - aktion: Außerhäuslichen Essensort bei dem Kontakt zu Geflügelfleisch bestand den zuständigen Einrichtung mitteilen.
    beschreibung: Zuständige Einrichtung kann z.B. die Landesstelle oder eine Lebensmittelaufsichtsbehörde sein. Eine Mitteilung könnte z.B. über eine öffentlichen Kommentar in der Meldesoftware erfolgen.
  - aktion: Verhaltenshinweise an erkrankte Person
    beschreibung: Händehygiene, Küchenhygiene, 
  - aktion: Informationsweitergabe an Gesundheitsämter
    beschreibung: Wenn andere Gesundheitsämter betroffen sind
  - aktion: Erfassung für das Meldewesen

interview:     
- question: Sind in Ihrem Umfeld andere Personen erkrankt?
  comment: Diese Frage ist wichtig um diese Person auch auf Schutzmaßnahmen hinzuweisen, etwas über die Übertragung der Erkrankung herauszufinden und gegebenenfalls eine Ausbruchsuntersuchung zu starten.
  keyword: "Andere Personen?"
  kategorie: abklaerung
- question: Waren Sie 2-5 Tage vor Erkrankungsbeginn in einem weiter entfernten Land mit potentiell niedrigen hygienischen Standards?
  comment: Campylobacter wird im Ausland vielfach durch Wasser übertragen. Die erkrankte Person sollte beim nächsten Aufenthalt die wichtigsten Regeln kennen zum Trinken, Zähneputzen usw. nur Wasser aus originalverpackten Flaschen verwenden. Gemüse schälen oder mit originalverpacktem Wasser waschen und Fleisch sollte nur gut durchgegart gegessen werden.
  kategorie: abklaerung
- question: Haben Sie 2-5 Tage vor Erkrankungsbeginn Rohmilch getrunken?
  comment: Wenn dies der Fall ist, sollte eine Meldung an das zuständige Lebensmittelaufsichtsamt erfolgen. Die erkrankte Person sollte Wissen, das Rohmilch vor dem Konsum unbedingt abgekocht werden sollte. In der Vergangenheit hat es Ausbrüche durch Rohmilch gegeben.
  kategorie: abklaerung
- question: Haben Sie in den letzten 5 Tagen bevor dem Beginn der Erkrankung außwärts Geflügelfleisch gegessen? Wenn Ja, wo genau?
  comment: Wenn die Person außwärts Geflügelfleisch essen war, sollte der Name des Essensortes in einem öffentlichen Kommentar vermerkt werden. Das hilft der Landestelle einem Ausbruch auf die Spur zu kommen.
  keyword: Außwärts Geflügelfleisch
  kategorie: abklaerung
- question: Haben Sie in den letzten fünf Tagen vor der Erkrankung zu Hause Geflügelfleisch gegessen?
  comment: Wenn das der Fall ist, könnte sich die erkrankte Person dort angesteckt haben. Insbesondere wenn die Person selber gekoch hat
  keyword: Geflügelfleisch auswärts
  kategorie: abklaerung
- question: Arbeiten Sie mit Lebensmitteln?
  comment: Ein Tätigkeitsverbot sollte nach § 42 I 1. erfolgen. Dabei kann unterschieden werden zwischen Personen, die besonders intensiv mit gefährlichen Lebensmitteln arbeiten (z.B. ein Koch, der Salat oder andere rohe Produkte zubereitet) oder eine Person, die das nicht tut (z.B. jemand in der Essensausgabe)
  keyword: TV
  kategorie: abklaerung
- question: Achten Sie auf Küchenhygiene, zum Beispiel Hände, Messer und Brettchen nach dem Fleisschneiden waschen. Gerne schicke ich Ihnen einen Link
  comment: Küchenhygiene verhinder Campylobacter enteritis
  kategorie: empfehlungen

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
