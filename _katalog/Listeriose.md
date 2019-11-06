---
title: Listeriose
layout: post
author: Jakob Schumacher

fortbildung: fortbildung/Listeriose.html

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/2/26/Listeria_monocytogenes_-_Columbia_Horse_Blood_Agar_-Detail.jpg
  kurzbeschreibung: Listeriose ist eine infektiöse Erkrankung. Und zählt zu den durch Lebensmittel übertragenen Krankheiten. Ausbrüche durch Lebensmittel kommen häufiger vor. 

inhalte:  
# Erregerdaten
  - id: erregername
    text: Listeriose wird durch Bakterien der Gattung Listeria hervorgerufen
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium. 
    kategorie: erregerdaten
  - id: erregergruppen
    text: Der Erreger wird unterteilt in Spezies. Humanpathogen ist insbesondere Listeria monocytogenes. Listeria monocytogenes wird wiederum unterteilt in Serovare.
    kategorie: erregerdaten
  - id: toxin
    text: 
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: 
    kategorie: erregerdaten 
  - id: umweltresistenz
    text: Der Erreger kann sich in der Umwelt vermehren. Auch unter Kühlschrankbedingungen
    kategorie: erreger
    
# Vorkommen
  - id: vorkommen_deu
    text: Ungefähr 700 invasive Fälle werden jährlich gemeldet
    nummer_2018: 698
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor. 
    kategorie: vorkommen hygkowichtig
  - id: reservoir
    text: Der Erreger kommt ubiquitär in der Erde vor. Der Erreger kommt auch im Darm von Tiere und gesunde Menschen vor.
    kategorie: vorkommen hygkowichtig
      
# Zeiten
  - id: inkubationszeit
    text: Die Inkubationszeit beträgt wenige Stunden bis 6 Tage
    kategorie: zeiten hygkowichtig
  - id: inkubationszeit_min
    text: 
    nummer: 0.3
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    nummer: 6
    kategorie: zeiten
  - id: ansteckungszeit_normal
    text: Erkrankte Personen sind ansteckend vom Beginn der Krankheitszeichen bis Monate nach Ende der Krankheitszeichen.
    kategorie: zeiten hygkowichtig
  - id: ansteckungszeit_lang 
    text: 
    kategorie: zeiten
  - id: saisonalitaet
    text: Es gibt keinen saisonalen Gipfel
    kategorie: zeiten


# Klinik
  - id: symptome
    text: Krankheitszeichen bei immunkompetenten Personen sind Durchfall und leichtes Fieber.
    kategorie: klinik hygkowichtig
  - id: komplikationen
    text: |
      Bei Immungeschwächten kann das Vollbild einer Listeriose auftreten: Es kann zu den folgenden Symptomen kommen: Gastroenteritis, Zeichen eines grippalen Infekts, Sepsis, eitrige Meningitis und Tod. 
    kategorie: klinik hygkowichtig
  - id: krankheitsdauer
    text: 
    kategorie: klinik
  - id: asymptomatik
    text: Die meisten Immunkompetenten entwickeln keine Krankheitszeichen
    kategorie: klinik
  - id: letalität
    text: 7 von 100 erkrankten Personen versterben.
    kategorie: klinik hygkowichtig

# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird üblicherweise durch viele Lebensmittel übertragen. Häufig betroffen sind Fleisch, Milch und Milchprodukte, Salate. Von Mensch-zu-Mensch Übertragung kommt quasi nur in der Schwangerschaft vor. Ganz selten kann der Erreger durch die Umwelt auf Wunden gelangen und dort eine Infektion hervorrufen.
    kategorie: uebertragungswege hygkowichtig

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
  - varname: NRZ
  
interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: ERKRANKUNGSBEGINN
  - varname: HOSPITALISIERUNG
  - question: Wären sie bereit den Inhalt Ihres Kühlschrankes untersuchen zu lassen?
    comment: Listeriose-Ausbrüche sind häufig über einen längeren Zeitraum ausgestreckt und die Zugehörigkeit zu einem Ausbruch kann erst sehr spät festgestellt werden. Wenn die Lebensmittelaufsicht bereit dazu ist - wäre es sinnvoll bei jeder erkrankten Person die vor der Erkrankung gegessenen Lebensmittel in einem Kühlschrank untersuchen zu lassen.
    
quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Listeriose.html
  - name: European center for diesease control (englisch)
    webseite: https://www.ecdc.europa.eu/en/listeriosis
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Listeriose
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/listeria/index.html
  - name: Public health england (englisch)
    webseite: https://www.gov.uk/government/collections/listeria-guidance-data-and-analysis
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Listeriosis%22%5BMesh%5D
---