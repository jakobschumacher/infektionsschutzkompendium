---
title: Campylobacter-Enteritis
layout: post
fortbildung: fortbildung/Campylobacter-Enteritis.html
aktionen: aktionen/Campylobacter-Enteritis.html

author: Jakob Schumacher

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/a/a4/Campylobacter_fetus_01.jpg
  bildcredits: https://commons.wikimedia.org/wiki/File:Campylobacter_fetus_01.jpg
  bildautor: CDC/ Dr. Patricia Fields, Dr. Collette Fitzgerald
  kurzbeschreibung: Campylobacter ist der häufigste bakterielle Durchfallerreger. Fast täglich erfolgen Meldungen an das Gesundheitsamt

inhalte:  
# Erregerdaten
  - id: erregername
    text: Die Infektionskrankheit Campylobacter-Enteritis wird durch den Erreger Campylobacter hervorgerufen. 
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium. 
    kategorie: erregerdaten
  - id: erregergruppen
    text: Der Erreger wird in Spezies eingeteilt. C. jejuni, C. coli, C. lari, C. fetus und C. upsaliensis sind häufige Krankheitserreger
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
    text: Ungefähr 65.000 Fälle werden in Deutschland gemeldet.
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor.
    kategorie: vorkommen
  - id: reservoir
    text: Der Erreger kommt in vielen Tierarten vor Wildtiere, Nutztiere und Heimtiere.  
    kategorie: vorkommen
    quellename: RKI Ratgeber
    quelleurl: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Campylobacter.html
  - id: umweltresistenz
    text: Der Erreger kann sich nur in Organismen vermehren
    kategorie: vorkommen hygkowichtig
    quellename: RKI Ratgeber 

    
# Zeiten
  - id: inkubationszeit
    text: Eine Inkubationszeit beträgt im Regelfall 2 bis 5 Tage
    kategorie: zeiten, hygkowichtig
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
    kategorie: zeiten hygkowichtig
  - id: ansteckungszeit_lang 
    text: Immungeschwächte Personen können den Erreger noch lange Zeit ausscheiden
    kategorie: zeiten
    quellename: RKI Ratgeber
    quelleurl: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Campylobacter.html
  - id: saisonalitaet
    text: Saisonaler Gipfel ist von Juni bis August
    quellename: Association between the ambient temperature and the occurrence of human Salmonella and Campylobacter infections 
    quelleurl: https://www.nature.com/articles/srep28442
    kategorie: zeiten, hygkowichtig 

# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird übertragen 
      über Lebensmittel insbesondere Geflügelfleisch, Rohmlich, anderes Fleisch. Er wird selten von Mensch zu Mensch übertragen. 
      Vor allem in Ländern mit niedrigerem Hygienestandards wird er auch über Trinkwasser oder Baden übertragen. C. fetus kann von einer Mutter intrauterin oder perinatal auf das Kind gelangen. 
    kategorie: uebertragungswege hygkowichtig
    quellename: RKI Ratgeber
    quelleurl: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Campylobacter.html


# Klinik
  - id: symptome
    text: Typische Krankheitszeichen sind Durchfall, Bauchschmerzen und Erbrechen. Der Durchfall kann auch blutig sein. Es können Prodromi vor dem Beginn des Durchfalls auftreten. 
    kategorie: klinik
  - id: komplikationen
    text: Komplikationen sind Gelenkentzündungen, ein Guillan-Barré-Syndrom. Diskutiert werden Reizdarmsyndrom und chronisch-entzündliche Darmerkrankungen.
    kategorie: klinik
  - id: krankheitsdauer
    text: Die Erkrankung dauert im üblichen Fall eine Woche
    kategorie: klinik
  - id: asymptomatik
    text: 50 von 100 Kindern haben keine Krankheitszeichen.
    kategorie: klinik
    quellename: Cohort study of intestinal infection with campylobacter in Mexican children.
    quelleurl: https://www.ncbi.nlm.nih.gov/pubmed/2893920
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
  - varname: KUECHENHYGIENE
  - varname: HAENDEHYGIENE
  - aktion: Unterrichtung der Lebensmittelaufsicht über einen außerhäuslichen Essensort bei dem Geflügelfleisch gegessen wurde oder eine andere mögliche Ansteckungsquelle.
    beschreibung: Die Lebensmittelaufsicht kann bei mehreren Verdachtsfällen am selben Essensort eine Untersuchung einleiten.

interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: AUSBRUCHSABKLAERUNG
  - varname: LEBENSMITTELARBEIT
  - varname: IN33EINRICHTUNG
  - varname: HOSPITALISIERUNG
  - question: Haben Sie 2-5 Tage vor Erkrankungsbeginn Rohmilch getrunken?
    comment: Wenn dies der Fall ist, sollte eine Meldung an das zuständige Lebensmittelaufsichtsamt erfolgen. Die erkrankte Person sollte Wissen, das Rohmilch vor dem Konsum unbedingt abgekocht werden sollte. In der Vergangenheit hat es Ausbrüche durch Rohmilch gegeben.
    kategorie: abklaerung
    keyword: Rohmlich?
  - question: Haben Sie 2-5 Tagen bevor dem Beginn der Erkrankung auswärts Geflügelfleisch gegessen? Wenn Ja, wo genau?
    comment: Wenn die Person außwärts Geflügelfleisch essen war, sollte der Name des Essensortes in einem öffentlichen Kommentar vermerkt werden. Das hilft der Landestelle einem Ausbruch auf die Spur zu kommen.
    keyword: Geflügelfleisch auswärts?
    kategorie: abklaerung
  - question: Haben Sie in den letzten fünf Tagen vor der Erkrankung zu Hause Geflügelfleisch gegessen?
    comment: Wenn das der Fall ist, könnte sich die erkrankte Person dort angesteckt haben. Insbesondere wenn die Person selber gekocht hat
    keyword: Geflügelfleisch zu Hause?
    kategorie: abklaerung

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
