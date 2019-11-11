---
title: Clostridioides-Enteritis 
layout: post
fortbildung: fortbildung/Clostridioides-Enteritis .html
aktionen: aktionen/Clostridioides-Enteritis .html

lastupdated: 22. Oktober 2019
author: Jakob Schumacher

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/1/11/ClostridiumDifficile.jpg
  bildcredits: https://commons.wikimedia.org/wiki/File:ClostridiumDifficile.jpg
  bildautor: CDC/ Lois S. Wiggs
  kurzbeschreibung: Clostridioides difficile (früher Clostridium difficile) ist ein nosokomialer Erreger, der meist nach einer Antibiotikagabe auftritt. Die Meldungen erfolgen üblicherweise aus einem Krankenhaus.

inhalte:  
# Erregerdaten
  - id: erregername
    text: Clostridioides difficile verursacht Clostridioides-Enteritis
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium. 
    kategorie: erregerdaten
  - id: erregergruppen
    text: Der Erreger wird unterteilt in Ribotypen. 
    kategorie: erregerdaten
  - id: 
    text: Nur Toxin-produzierende Clostridioides verursachen eine Erkrankung
    kategorie: erregerdaten hygkowichtig
  - id: erregergruppenunterschiede
    text: Der Ribotyp 027 ist gefährlicher als andere.  
    kategorie: erregerdaten hygkowichtig
    
# Vorkommen
  - id: vorkommen_deu
    text: Ungefähr 2500 schwere Fälle werden in Deutschland gemeldet.
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor.
    kategorie: vorkommen
  - id: reservoir
    text: Der Erreger kommt ubiquitär vor. In etwa 80% der Kleinkindern und 5% der Erwachsenen tragen den Erreger im Darm. 
    kategorie: vorkommen
    
# Zeiten
  - id: inkubationszeit_false
    text: Eine Inkubationszeit kann nicht angegeben werden
    kategorie: zeiten
  - id: inkubationszeit_min
    text: 
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
  - id: ansteckungszeit_normal
    text: Solange die Person erkrankt ist scheidet sie den Erreger aus  (aus pragmatischen Gründen wird empfohlen die Isolierungsmaßnahmen 48h nach Ende der Symptome aufzuheben)
    kategorie: zeiten hygkowichtig
  - id: ansteckungszeit_lang 
    text: Erkrankte Personen können den Erreger noch lange Zeit ausscheiden
    kategorie: zeiten

# Klinik
  - id: symptome
    text: Krankheitszeichen sind Durchfall mit akutem Beginn und einem  spezifischen fauligen Geruch.
    kategorie: klinik
  - id: komplikationen
    text: Komplikationen sind pseudomembranöse Colitis und toxisches Megacolon
    kategorie: klinik
  - id: krankheitsdauer
    text: 
    kategorie: klinik
  - id: asymptomatik
    text: 
    kategorie: klinik
  - id: letalität
    text: Etwa 2 von 100 erkrankten Personen versterben
    kategorie: klinik

# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird übertragen 
      von Mensch-zu-Mensch über die Hände (meist nosokomial)
      und selten von Tier oder der Umwelt zum Menschen. Die Erkrankung tritt eigentlich nur auf, wenn zuvor Antibiotika gegeben wurden.
    kategorie: uebertragungswege hygkowichtig

# Meldung
  - id: Meldepflicht
    text: Clostridioides ist nur meldepflichtig wenn ein schwerer Fall auftritt. Ein schwerer Fall liegt vor wenn aufgrund der Erkrankung eine Aufnahme in ein Krankenhaus erfolgen musste, wenn die erkrankte Person aufgrund der Erkrankung auf eine Intensivstation verlegt werden musste, aufgrund der Erkrankung ein chirurgischer Eingriff erfolgen musste, die Erkrankung zum Tode beiträgt.
    quellename: IfSG-Meldepflicht-Anpassungsverordnung
    quelleurl: https://www.gesetze-im-internet.de/ifsgmeldanpv/BJNR051500016.html
    kategorie: meldepflicht, hygkowichtig   

aktionsbausteine:
  - varname: GETINFO
  - varname: UEBERMITTLUNG
  - varname: AUSBRUCHSUNTERSUCHUNG
  - varname: UNTERRICHTUNG_GA
  - varname: WAESCHEHYGIENE
  - varname: ISOLIERUNG
  - aktion: Verhaltenshinweise an medizinische Einrichtung
    beschreibung: Händehygiene ergänzt durch Händewaschen, Isolierung (Heim, Krankenhaus o.ä.), eigene Toilette für erkrankte Personen, Desinfektion (z.B. tägliche Wischdesinfektion), Umstellung auf sporozides Mittel, Steckbettenspüle nach Benutzung sporozid waschen, Minimierung Personalbewegung. Siehe [KRINKO-Empfehlungen zu Clostridioides]() 


interview:     
  - question: Wann ist der Patient erkrankt?
  - question: Welche Symptome hat der Patient?
  - question: Sind die Empfehlungen der KRINKO eingehalten?
    comment: |
      Isolierung des Patienten, Umstellung auf sporozide Desinfektions, z.B. bei Steckbetten. [KRINKO-Empfehlungen zu Clostridien](https://www.rki.de/DE/Content/Infekt/Krankenhaushygiene/ThemenAZ/C/Hygiene_CDI_BGBL_62-7-2019.pdf?__blob=publicationFile)
  - question: Sind noch weitere Fälle im Krankenhaus aufgetreten?
    comment: Wenn mehr Fälle als üblich auftreten, könnte eine Ausbruchsuntersuchung erfolgen. 
  - question: Hat der Patient ein Antibiotikum eingenommen und wenn ja aufgrund welcher Indikation?
    comment: Antibiotika ist ein Hauptgrund für eine Clostridium difficile Diarrhoe. Die Entscheidung ob ein Antibiotikum gegeben werden sollte oder nicht sollte von einer Ärztin/einem Arzt getroffen werden.
    keyword: Antibiotika?
    kategorie: abklaerung

quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Clostridium.html
  - name: Erregersteckbrief
    webseite: https://www.infektionsschutz.de/erregersteckbriefe/clostridium-difficile/
  - name: KRINKO-Empfehlungen
    webseite: https://www.rki.de/DE/Content/Infekt/Krankenhaushygiene/ThemenAZ/C/Hygiene_CDI_BGBL_62-7-2019.pdf?__blob=publicationFile
  - name: European center for diesease control (englisch)
    webseite: https://ecdc.europa.eu/en/clostridium-difficile-infections
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Clostridium_difficile
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/cdiff/index.html
  - name: Public health england (englisch)
    webseite: https://www.nhs.uk/conditions/c-difficile/
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Clostridium+difficile%22%5BMesh%5D
  - name: Ärzteblatt
    webseite: https://www.aerzteblatt.de/archiv/162935/Clostridium-difficile-Infektion
---

