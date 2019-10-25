---
title: Norovirus-Gastroenteritis
layout: post
lastupdated: 11. Oktober 2019
author: Jakob Schumacher

fortbildung: fortbildung/norovirus.html

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/a/ae/Norovirus_4.jpg
  kurzbeschreibung: Norovirus ist der häufigste meldepflichtige Erreger. Dementsprechend ist die Ermittlung durch die Gesundheitsämter sehr häufig.

inhalte:  
# Erregerdaten
  - id: erregername
    text: Norovirus-Gastroenteritis wird hervorgerufen durch Norovirus
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Virus
    kategorie: erregerdaten
  - id: erregergruppen
    text: Der Erreger wird unterteilt in die Genogruppen I - V. 
    kategorie: erregerdaten
  - id: 
    text: 
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: 
    kategorie: erregerdaten
    
# Vorkommen
  - id: vorkommen_deu
    text: 80.000 Fälle werden in Deutschland gemeldet.
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor.
    kategorie: vorkommen
  - id: reservoir
    text: Das Reservoir ist der Mensch. 
    kategorie: vorkommen
    
# Zeiten
  - id: inkubationszeit_false
    text: Die Inkubationszeit beträg 6 bis 48 Stunden
    kategorie: zeiten
  - id: inkubationszeit_min
    nummer: 6 Stunden
    kategorie: zeiten
  - id: inkubationszeit_max
    nummer: 48 Stunden
    kategorie: zeiten
  - id: ansteckungszeit_normal
    text: Solange eine Person erkrankt ist und noch Wochen danach scheidet sie den Erreger aus (aus pragmatischen Gründen wird empfohlen die Isolierungsmaßnahmen 48h nach Ende der Symptome aufzuheben)
    kategorie: zeiten
  - id: ansteckungszeit_lang 
    text: Erkrankte Personen, insbesondere Personen mit Immunschwäche können den Erreger noch lange Zeit ausscheiden
    kategorie: zeiten

# Klinik
  - id: symptome
    text: Krankheitszeichen sind schwallartiges Erbrechen, wässriger Durchfall, ein akutem Beginn und einem starken Krankheitsgefühl
    kategorie: klinik
  - id: komplikationen
    text: Komplikationen sind pseudomembranöse Colitis und toxisches Megacolon
    kategorie: klinik
  - id: krankheitsdauer
    text: Die Krankheitsdauer beträgt üblicherweise 1-2 Tage
    kategorie: klinik
  - id: asymptomatik
    text: Etwa 4 von 100 Europäern sind asymptomatisch
    kategorie: klinik
  - id: letalität
    text: 
    kategorie: klinik

# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird übertragen 
      Von Mensch-zu-Mensch über Hände,
      über Lebensmittel, 
      über Trinkwasser,
      über Erbrochenes (Tröpfchen).

# Meldung
  - id: Meldepflicht
    text: Der Norovirus-Nachweis im Labor ist meldepflichtig nach § 7
    quellename: IfSG
    quelleurl: https://www.gesetze-im-internet.de/ifsg/
    kategorie: meldepflicht, hygkowichtig   



aktionsbausteine:
  - aktion: Informationsbeschaffung zum Fall 
  - aktion: Verhaltenshinweise an erkrankte Person
    beschreibung: Händehygiene, Küchenhygiene, 
  - aktion: Verhaltenshinweise an die Einrichtung
    beschreibung: Bessere Händehygiene, erkrankte Personen länger zu Hause lassen, Küchenhygiene, Speisen durchgaren, ggf. Isolierung (Heim, Krankenhaus o.ä.), eigene Toilette für erkrankte Personen, Desinfektion (z.B. tägliche Wischdesinfektion), Umstellung auf viruzides oder viruzid-plus Mittel, Atemschutz bei Erbrochenem oder Stuhl, Wäsche mindestens 60° plus Desinfektionswaschmittel waschen (nach Desinfektionsmittelliste RKI), Minimierung Personalbewegung.
  - aktion: TV nach §34.1/§42 
    beschreibung: Das ist selten notwendig, da 48h meist überschritten.
  - aktion: Ausbruchsuntersuchung
    beschreibung: Das ist notwendig, wenn mehrere Fälle betroffen sind und dadurch möglicherweise weitere Fälle verhindert werden können
  - aktion: Informationsweitergabe an Gesundheitsämter
    beschreibung: Wenn andere Gesundheitsämter betroffen sind
  - aktion: Informationsweitergabe an die Lebensmittelaufsicht 
    beschreibung: Das ist notwendig, wenn eine Ausbruchsuntersuchung ein Lebensmittel als Quelle ergibt
  - aktion: Erfassung für das Meldewesen

interview:     
    - question: Wann haben die Krankheitszeichen begonnen?
      keyword: Erkrankungsbeginn?
      kategorie:  abklaerung
    - question: Welche Krankheitszeichen haben Sie?
      keyword: Durchfall oder Erbrechen?
      kategorie:  abklaerung
    - question: Gab es weitere Erkrankungen im Umfeld?
      comment: Diese Frage ist wichtig um herauszufinden, ob ein Ausbruch vorliegt. Beispielsweise könnte eine Person berichten, sie sei bei einem Schulausflug gewesen und die Hälfte der Schülerinnen und Schüler sei erkrankt. Das würde eine Ausbruchsuntersuchung rechtfertigen.
      keyword: Weitere Erkrankungen im Umfeld?
      kategorie:  abklaerung

quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/ - Ratgeber_Norovirus.html
  - name: Erregersteckbrief
    webseite: https://www.infektionsschutz.de/erregersteckbriefe/noroviren/
  - name: European center for diesease control (englisch)
    webseite: https://ecdc.europa.eu/en/norovirus-infection
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Humane_Noroviren
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/norovirus/about/index.html
  - name: Public health england (englisch)
    webseite: https://www.gov.uk/government/collections/norovirus-guidance-data-and- - analysis
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Norwalk+virus%22%5BMesh%5D
---
