---
title: Yersiniose
layout: post

lastupdated: 22. Oktober 2019
author: Jakob Schumacher

fortbildung: fortbildung/Yersiniose.html

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/PHIL_1918_lores_Floureszenz_Yersinia.jpg/450px-PHIL_1918_lores_Floureszenz_Yersinia.jpg
  kurzbeschreibung: Yersiniose kommt ab und zu mal im Gesundheitsamt vor. Große Ausbrüche sind in Deutschland sehr selten.

inhalte:  
# Erregerdaten
  - id: erregername
    text: 
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium. 
    kategorie: erregerdaten
  - id: erregergruppen
    text: Der Erreger wird unterteilt in Spezies und diese in Biovare.
    quellename: RKI-Ratgeber 
    kategorie: erregerdaten 
  - id: toxine
    text: 
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: Nur die Spezies Y. enterocolitica und Y. pseudotuberculosis rufen die Erkrankung Yersiniose vor. 
    kategorie: erregerdaten
    
# Vorkommen
  - id: vorkommen_deu
    text: Etwa 2600 Fälle werden in Deutschland gemeldet.
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor.
    kategorie: vorkommen
  - id: reservoir
    text: Reservoir für Y. enterocolitica sind Menschen und Tiere, insbesondere Schweine. Y. pseudotuberculosis kommt überwiegend in Vögeln und Nagetieren vor.
    kategorie: vorkommen
    quellename: RKI Ratgeber
  - id: ueberlebensfaehigkeit
    text: Der Erreger kann sich auch bei Kühlschranktemperatur vermehren
    quellename: RKI Ratgeber
    
# Zeiten
  - id: inkubationszeit
    text: Eine Inkubationszeit beträgt im Regelfall 3-7 Tage
    kategorie: zeiten
  - id: inkubationszeit_min
    text: 
    nummer: 3 Tage
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
    nummer: 7 Tage
  - id: ansteckungszeit_normal
    text: Erkrankte Personen sind ansteckend vom Beginn der Krankheitszeichen bis 2-3 Wochen nach Symptom-Ende
    kategorie: zeiten
  - id: ansteckungszeit_lang 
    text: Insbesondere immungeschwächte Personen können den Erreger noch lange Zeit ausscheiden
    kategorie: zeiten
    quellename: RKI Ratgeber
    
# Klinik
  - id: symptome
    text: |
      Typische Krankheitszeichen sind
      Durchfall,
      Bauchschmerzen,
      Fieber,
      Lymphknotenschwellung,
      Pseudoblinddarmentzündung
    kategorie: klinik
  - id: komplikationen
    text: Als Komplikationen können auftreten Gelenkschmerzen, Erythema nodosum und Reizdarmsyndrom
    kategorie: klinik
  - id: krankheitsdauer
    text: Die Erkrankung dauert zwischen 1 und 3 Wochen
    kategorie: klinik
  - id: asymptomatik
    text: 
    kategorie: klinik
  - id: letalität
    text: 
    kategorie: klinik

# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird typischerweise übertragen über Lebensmittel insbesondere Schweinefleisch, Rohmlich, aber auch Salate und andere Rohprodukte 
      vor allem Ländern mit niedrigeren Hygienestandards auch über Trinkwasser oder Baden. Direkte Übertragungen von Mensch zu Mensch sind selten.
    kategorie: uebertragungswege
    quellename: RKI Ratgeber

# Meldung
  - id: Meldepflicht
    text: Ein Labornachweis ist meldepflichtig.
    quellename: IfSG
    quelleurl: https://www.gesetze-im-internet.de/ifsg
    kategorie: meldepflicht

aktionsbausteine:
  - varname: TV31
    kategorie: aktionsbausteine
  - varname: GETINFO
    kategorie: aktionsbausteine
  - aktion: Verhaltenshinweise an erkrankte Person
    beschreibung: Händehygiene, Küchenhygiene, Desinfektions nach dem Toilettengang
  - aktion: Verhaltenshinweise an die Einrichtung
    beschreibung: Bessere Händehygiene, erkrankte Personen länger zu Hause lassen, Küchenhygiene, Speisen durchgaren, ggf. Isolierung (Heim, Krankenhaus o.ä.), eigene Toilette für erkrankte Personen, Desinfektion (z.B. tägliche Wischdesinfektion), Wäsche mindestens 60° plus Desinfektionswaschmittel waschen (nach Desinfektionsmittelliste RKI), Minimierung Personalbewegung.
  - aktion: Ausbruchsuntersuchung
    beschreibung: Das ist selten notwendig, wenn mehrere Fälle betroffen sind und dadurch möglicherweise weitere Fälle verhindert werden können
  - aktion: Informationsweitergabe an Gesundheitsämter
    beschreibung: Wenn andere Gesundheitsämter betroffen sind
  - aktion: Informationsweitergabe an die Lebensmittelaufsicht 
    beschreibung: Das ist notwendig, wenn die Ansteckung ein Lebensmittel als Quelle ergibt
  - aktion: Erfassung für das Meldewesen
  
interview:     
  - question: Wann haben die Krankheitszeichen begonnen?
    keyword: Erkrankungsbeginn?
    kategorie: abklaerung
  - question: Welche Krankheitszeichen haben Sie?
    keyword: Krankheitszeichen?
    kategorie: abklaerung
  - question: Gab es weitere Erkrankungen im Umfeld?
    comment: Diese Frage ist wichtig um herauszufinden, ob ein Ausbruch vorliegt. 
    keyword: Weitere Erkrankungen im Umfeld?
    kategorie: abklaerung

quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Yersiniose.html
  - name: European center for diesease control (englisch)
    webseite: https://www.ecdc.europa.eu/en/yersiniosis
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Yersiniose
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/yersinia/index.html
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Yersinia+Infections%22%5BMesh%5D
    
    
---
