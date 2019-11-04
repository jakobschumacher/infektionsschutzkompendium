---
title: Salmonellose
layout: post
fortbildung: fortbildung/Salmonellose.html

author: Jakob Schumacher

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/c/c0/Salmonella_Typhimurium_Gram.jpg
  kurzbeschreibung: Salmonellose ist neben Campylobacter der häufigste bakterielle Gastroenteritis-Erreger in Deutschland. Salmonellen können Gastroenteritis oder Typhus/Paratyphus hervorrufen. Ausbrüche sind häufig erkennbar.

inhalte:  
# Erregerdaten
  - id: erregername
    text: Die Infektionskrankheit Salmonellose wird durch Nichttyphoidale Salmonellen hervorgerufen. 
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium. 
    kategorie: erregerdaten
  - id: erregergruppen
    text: Der Erreger wird in tausende Serotypen nach dem Kauffmann-White-Le Minor-Schema eingeteilt. Die häufigsten sind S. Typhimurium und S. Enteritidis.
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
    text: Ungefähr 16.000 Fälle werden in Deutschland gemeldet.
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor.
    kategorie: vorkommen
  - id: reservoir
    text: Der Erreger kommt in vielen Tierarten, die häufig asymptomatisch sind. S. Typhimurium kommt häufig in Schweinen vor. S. Enteritidis häufig in Geflügel. Seltene Serovare weisen auf ein besondere Infektionsquelle hin.
    kategorie: vorkommen
    quellename: RKI Ratgeber
    quelleurl: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Campylobacter.html
  - id: umweltresistenz
    text: Der Erreger kann sich sehr umweltresistente Stadien bilden (VBNC)
    kategorie: vorkommen hygkowichtig
    quellename: RKI Ratgeber 

    
# Zeiten
  - id: inkubationszeit
    text: Eine Inkubationszeit beträgt im Regelfall 6h bis 3 Tage
    kategorie: zeiten, hygkowichtig
  - id: inkubationszeit_min
    text: 
    nummer: 0.25
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
    nummer: 3
  - id: ansteckungszeit_normal
    text: Solange die Person erkrankt ist scheidet sie den Erreger aus. Auch nach dem Ende der Symptome wird der Erreger ausgeschieden
    kategorie: zeiten hygkowichtig
  - id: ansteckungszeit_lang 
    text: Insbesondere Kinder können den Erreger noch über viele Monate ausscheiden.
    kategorie: zeiten
  - id: saisonalitaet
    text: Saisonaler Gipfel ist von Juni bis August
    kategorie: zeiten, hygkowichtig 

# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird meist 
      über Lebensmittel übertragen, insbesondere über Schweinefleisch und Geflügelfleisch. Prinzipiell können aber die meisten Lebensmittel mit Salmonellen kontaminiert sein. Er wird selten von Mensch zu Mensch übertragen. 
      Vor allem in Ländern mit niedrigerem Hygienestandards wird er auch über Trinkwasser oder Baden übertragen. 
    kategorie: uebertragungswege hygkowichtig
    quellename: RKI Ratgeber


# Klinik
  - id: symptome
    text: Typische Krankheitszeichen sind Durchfall, Bauchschmerzen und Erbrechen.  
    kategorie: klinik
  - id: komplikationen
    text: Komplikationen sind Organentzündungen z.B. Abszesse, Gelenksinfektionen, Lungenentzündungen, Meningitis.
    kategorie: klinik
  - id: krankheitsdauer
    text: Die Erkrankung dauert im üblichen Fall bis zu einer Woche
    kategorie: klinik
  - id: asymptomatik
    text: 73 von 100 infizierten Kontaktpersonen entwickelten keine Symptome
    quelleurl: https://www.tandfonline.com/doi/abs/10.3109/00365549009027077?journalCode=infd19 
    kategorie: klinik
  - id: letalität
    text: Weniger al 1 von 1000 erkrankten Personen verstirbt in Deutschland.
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
  - aktion: Unterrichtung der Lebensmittelaufsicht und der Landesstelle über einen außerhäuslichen Essensort bei dem Rohfleisch verzehrt wurde oder hygienische Standards möglicherweise nicht optimal waren ("Dönerbude").
    beschreibung: Die Lebensmittelaufsicht kann bei mehreren Verdachtsfällen am selben Essensort eine Untersuchung einleiten.

interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: ERKRANKUNGSBEGINN
  - varname: AUSBRUCHSABKLAERUNG
  - varname: IN23EINRICHTUNG
  - varname: LEBENSMITTELARBEIT
  - varname: HOSPITALISIERUNG
  - question: Haben Sie vor dem Beginn der Erkrankung auswärts rohes Fleisch gegessen? Wenn Ja, wo genau?
    comment: Wenn die Person außwärts rohes Fleisch essen war, sollte der Name des Essensortes in einem öffentlichen Kommentar vermerkt werden oder der Lebensmittelaufsicht übermittelt werden. Das hilft der Landestelle einem Ausbruch auf die Spur zu kommen.
    keyword: Geflügelfleisch auswärts?
    kategorie: abklaerung
  
quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Salmonellose.html
  - name: Erregersteckbrief
    webseite: https://www.infektionsschutz.de/erregersteckbriefe/salmonellen/
  - name: European center for diesease control (englisch)
    webseite: https://www.ecdc.europa.eu/en/salmonellosis
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Salmonellose
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/salmonella/index.html
  - name: Public health england (englisch)
    webseite: https://www.gov.uk/government/collections/salmonella-guidance-data-and-analysis
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Salmonella+Infections%22%5BMesh%5D
    
---
