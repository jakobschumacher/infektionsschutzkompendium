---
title: Salmonellose
layout: post
fortbildung: fortbildung/Salmonellose.html
aktionen: aktionen/Salmonellose.html

author: Jakob Schumacher

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/e/ee/Salmonella_typhimurium.png
  bildcredits: https://commons.wikimedia.org/wiki/File:Salmonella_typhimurium.png
  bildautor: Max Planck Institute for Infection Biology, Berlin/Volker Brinkmann
  kurzbeschreibung: Salmonellose ist neben Campylobacter der häufigste bakterielle Gastroenteritis-Erreger in Deutschland. Salmonellen können Gastroenteritis oder Typhus/Paratyphus hervorrufen - als Salmonellose werden nur die Gastroenteritiden bezeichnet. Lebensmittel-Ausbrüche sind häufig erkennbar, da für die Salmonellen häufig Serovare angegeben werden.

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
    text: Der Erreger kommt in vielen Tierarten, die häufig asymptomatisch sind. S. Typhimurium kommt häufig in Schweinen vor. S. Enteritidis häufig in Geflügel. Seltene Serovare weisen auf ein besondere Infektionsquelle hin (z.B. Reptilienhaltung).
    kategorie: vorkommen hygkowichtig
    quellename: RKI Ratgeber
  - id: umweltresistenz
    text: Der Erreger kann sich sehr umweltresistente Stadien bilden (VBNC)
    kategorie: vorkommen
    quellename: RKI Ratgeber



# Zeiten
  - id: inkubationszeit
    text: Eine Inkubationszeit beträgt im Regelfall 12h bis 4 Tage
    kategorie: zeiten, hygkowichtig
    quelle: https://www.cambridge.org/core/journals/epidemiology-and-infection/article/incubation-period-for-outbreakassociated-nontyphoidal-salmonellosis-cases-minnesota-20002015/923FDA40A6AD8C6727F86C52269DEF3D
  - id: inkubationszeit_min
    text:
    nummer: 0.25
    kategorie: zeiten
    quelle: https://www.cambridge.org/core/journals/epidemiology-and-infection/article/incubation-period-for-outbreakassociated-nontyphoidal-salmonellosis-cases-minnesota-20002015/923FDA40A6AD8C6727F86C52269DEF3D
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
    nummer: 16
    quelle: https://www.cambridge.org/core/journals/epidemiology-and-infection/article/incubation-period-for-outbreakassociated-nontyphoidal-salmonellosis-cases-minnesota-20002015/923FDA40A6AD8C6727F86C52269DEF3D
  - id: ansteckungszeit_normal
    text: Solange die Person erkrankt ist scheidet sie den Erreger aus. Auch nach dem Ende der Symptome wird der Erreger ausgeschieden. Aber 48 nach Symptomende ist die Wahrscheinlichkeit der Weitergabe gering
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
    text:
    quelleurl: https://www.tandfonline.com/doi/abs/10.3109/00365549009027077?journalCode=infd19
    kategorie: klinik
  - id: letalität
    text: Weniger als 1 von 1000 erkrankten Personen verstirbt in Deutschland.
    kategorie: klinik

# Meldung
  - varname: IFSG_6_1_2
  - varname: IFSG_7
  - varname: IFSG_34
  - varname: IFSG_36

aktionsbausteine:
  - varname: INFOMANAGEMENT
  - varname: AUSBRUCHSUNTERSUCHUNG
  - varname: KUECHENHYGIENE2
  - varname: HAENDEHYGIENE2
  - varname: TV42
  - aktion: Essenszubereitung der erkrankten Person
    beschreibung: Die erkrankte Person sollte kein Essen zubereiten bis mindestens bis 48 nach Ende der Symptome, besser bis zwei Wochen nach Ende der Symptome. Bei Lebensmittelverarbeitenden im Regelfall bis zu 3x negativem Nachweis (Siehe Wiederzulassungsempfehlungen der Bundesländer).
  - aktion: Ausbruchsuntersuchung im gastronomischen Bereich
    beschreibung: Unterrichtung der Lebensmittelaufsicht und der Landesstelle über einen außerhäuslichen Essensort bei dem Rohfleisch verzehrt wurde oder hygienische Standards möglicherweise nicht optimal waren. Die Lebensmittelaufsicht kann bei mehreren Verdachtsfällen am selben Essensort eine Untersuchung einleiten.
  - aktion: Reptilienhaustier abklären lassen
    beschreibung: Reptilien kommen als Quelle von Salmonellosen in Betracht. Der Verdacht ergibt sich insbesondere wenn ein seltenes Serovar vorliegt.

interview:     
  - varname: INFOSAMMLUNG
  - varname: AUSBRUCHSABKLAERUNG
  - varname: LEBENSMITTELARBEIT
  - question: Haben Sie vor dem Beginn der Erkrankung auswärts gegessen? Wenn Ja, wo genau? Haben Sie Hinweise auf Hygienemängel dort? Was haben Sie dort gegessen?
    comment: Wenn die Person außwärts rohes Fleisch essen war, sollte der Name des Essensortes in einem öffentlichen Kommentar vermerkt werden oder der Lebensmittelaufsicht übermittelt werden. Das hilft der Landestelle einem Ausbruch auf die Spur zu kommen.
    keyword: Essen auswärts?
    kategorie: abklaerung
  - question: Haben Sie Reptilien als Haustier?
    comment: Reptilien können Salmonellosen übertragen, da sie Ausscheider sein können ohne zu erkranken. Zumeist haben Reptilien seltene Sovare
    keyword: Reptilien?
    kategorie: abklaerung

quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Salmonellose.html
  - name: Wiederzulassungsempfehlungen des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Wiederzulassung/Wiederzulassung_Tabelle.pdf?__blob=publicationFile
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
