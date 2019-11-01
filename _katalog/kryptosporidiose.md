---
title: Kryptosporidiose
layout: post
author: Jakob Schumacher

fortbildung: fortbildung/Kryptosporidiose.html

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/d/df/DPDxCrypto_oo_DIC.jpg
  kurzbeschreibung: Kryptosporidiose ist eine infektiöse Darmerkrankung. Die Erkrankung wird durch Kryptopsoridien hervorgerufen. 

inhalte:  
# Erregerdaten
  - id: erregername
    text: Kryptosporidiose wird durch Kryptopsoridien hervorgerufen. 
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Parasit.
    kategorie: erregerdaten hygkowichtig
  - id: erregergruppen
    text: Der Erreger wird unterteilt in Spezies. Häufig sind Cryptosporidium hominis und Cryptosporidium parvum.
    kategorie: erregerdaten
  - id: toxin
    text: 
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: 
    kategorie: erregerdaten 
  - id: umweltresistenz
    text: Kryptosporidien können Dauerformen bilden. Diese heißen Sporozoiten. Sie sind sehr widerstandsfähig.
    kategorie: erreger hygkowichtig
    
# Vorkommen
  - id: vorkommen_deu
    text: Ungefähr 1800 Fälle werden jährlich in Deutschland gemeldet
    nummer_2018: 1811
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor. 
    kategorie: vorkommen
  - id: reservoir
    text: Der Erreger kommt im Darm von gesunden Menschen und Tieren vor. In Europa kommt dies bei etwa 1-4% der Menschen vor. C. Parvum kommt bei Rindern, Pferden, Ziegen und Schafen vor. C. Homonis fast nur beim Menschen.
    kategorie: vorkommen hygkowichtig
      
# Zeiten
  - id: inkubationszeit
    text: Die Inkubationszeit beträgt 1 bis 12 Tage.
    kategorie: zeiten hygkowichtig
  - id: inkubationszeit_min
    text: 
    nummer: 1
    kategorie: zeiten
  - id: inkubationszeit_mean
    text: 
    nummer: 8
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    nummer: 12
    kategorie: zeiten
  - id: ansteckungszeit_normal
    text: Erkrankte Personen sind ansteckend vom Beginn der Krankheitszeichen bis Wochen nach Ende der Krankheitszeichen.
    kategorie: zeiten
  - id: ansteckungszeit_lang 
    text: 
    kategorie: zeiten
  - id: saisonalitaet
    text: Es gibt eine saisonale Häufung von Juli bis November
    kategorie: zeiten


# Klinik
  - id: symptome
    text: Krankheitszeichen bei immunkompetenten Personen sind wässriger Durchfall, Bauchschmerzen und Übelkeit.
    kategorie: klinik hygkowichtig
  - id: komplikationen
    text: |
      Bei Immungeschwächten kann das die Erkrankung lange anhalten und zu einer Exxikose führen. Bei AIDS Patienten kann es auch zu einer sekundär sklerosierenden Cholangitis kommen.
    kategorie: klinik 
  - id: krankheitsdauer
    text: Die Krankheitdauer bei Immunkompetenten beträgt 1-2 Wochen
    kategorie: klinik
  - id: asymptomatik
    text: Es gibt asymptomatische Fälle
    kategorie: klinik
  - id: letalität
    text: 
    kategorie: klinik 

# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird häufig über Wasser übertragen, das heißt Trinkwasser und Badewasser. Die Erkrankung kann auch von Mensch-zu-Mensch, von Tier-zu-Mensch oder über Lebensmittel übertragen werden.
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
  - varname: TOILETTENHYGIENE
  - varname: HAENDEHYGIENE
  - varname: WAESCHEHYGIENE
  - varname: ISOLIERUNG
  - varname: TV34
  - varname: TV42
  - varname: ESSENAUFREISEN
  - aktion: Ein betroffenes Schwimmbad sollte begangen werden.
  
interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: ERKRANKUNGSBEGINN
  - varname: HOSPITALISIERUNG
  - question: Waren Sie in den letzten 10 Tagen im Schwimmbad? Arbeiten Sie in einem Badebetrieb?
    comment:
    keyword: Schwimmbad
  - question: Haben Sie ein Haustier?
    comment:
    keyword: Haustier
  - question: Sind andere Personen in Ihrer Umgebung erkrankt?
    comment:
    keyword:
  - question: Waren sie im Ausland außerhalb von Europa?
    comment:
    keyword:
  - question: Sind Sie in einer Einrichtung in der Kinder- und Jugendliche betreut werden?
    comment: Eine Kryptosporidiose zieht ein Teilnahmeverbot bzw. Tätigkeitsverbot für Kindereinrichtungen nach sich
    keyword: Kindereinrichtung
  - question: Arbeiten Sie mit Lebensmitteln?
    comment: Eine Kryptosporidiose zieht ein Tätigkeitsverbot für die Arbeit mit Lebensmittel nach sich.
    keyword: Lebensmittel
  - question: Sie sollten bis 14 Tage nach dem Ende der Krankheitszeichen auf keinen Fall ins Schwimmbad gehen.
    comment: Sie können den Erreger noch ausscheiden und dieser ist resistent gegen Chlor.
    keyword: Nicht ins Schwimmbad
  - question: Waschen Sie sich häufig die Hände. Ganz unbedingt sollten Sie nach dem Toilettenbesuch und vor dem Essen die Hände waschen. Achten Sie auf eine gründliche Wäsche. Verwenden Sie Seife.
    comment: Häufig heißt mehrmals täglich. Gründlich heißt mindestens 30 Sekunden.
    keyword: Händewaschen
  - question:  Vermeiden Sie den Kontakt zu Personen mit einem kaputten Immunsystem. Das sind zum Beispiel Personen mit einer Krebserkrankung, Säuglinge und Menschen mit HIV oder anderen seltenen Erkrankungen die das Immunsystem betreffen.
    comment: Immunsupprimierte können schwerer erkranken
    keyword: Immunsystem
      
quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Kryptosporidiose.html
  - name: European center for diesease control (englisch)
    webseite: https://www.ecdc.europa.eu/en/cryptosporidiosis
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Kryptosporidien
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/parasites/crypto/index.html
  - name: Public health england (englisch)
    webseite: https://www.gov.uk/government/collections/cryptosporidiosis-guidance-data-and-analysis
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Cryptosporidiosis%22%5BMesh%5D

---
