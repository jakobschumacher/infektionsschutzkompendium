---
title: Brucellose
layout: post
fortbildung: fortbildung/Brucellose.html

author: Jakob Schumacher

basisdaten:
  bild: https://upload.wikimedia.org/wikipedia/commons/f/fa/Brucella_spp.JPG
  bildcredits: https://commons.wikimedia.org/wiki/File:Brucella_spp.JPG
  bildautor: CDC/Courtesy of Larry Stauffer, Oregon State Public Health Laboratory
  kurzbeschreibung: Brucellose ist eine Zoonose, die meist über Lebensmittel übertragen wird. In Deutschland ist sie selten - die Mehrzahl der Fälle wird importiert.

inhalte:  
# Erregerdaten
  - id: erregername
    text: Die Infektionskrankheit Brucellose wird durch den Erreger Brucella hervorgerufen. 
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium. 
    kategorie: erregerdaten
  - id: erregergruppen
    text: Humanpathogen sind Brucella melitensis, Brucella abortus, Brucella suis und Brucella canis
    quellename: RKI-Ratgeber 
    kategorie: erregerdaten
  - id: toxine
    text: 
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: Die Erkrankungen der unterschiedlichen Spezies haben zum Teil Eigennamen.
    kategorie: erregerdaten
  - id: alternativenamen
    text: Maltafieber, Mittelmeerfieber, undulierendes Fieber, Bang-Krankheit, Morbus Bang, Abortus Bang, Schweinebrucellose, Hundebrucellose, Rinderbrucellose, Schafbrucellose, Ziegenbrucellose
    kategorie: erregerdaten
    
# Vorkommen
  - id: vorkommen_deu
    text: In Deutschland werden etwa 50 Fälle pro Jahr gemeldet
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Endemiegebiet ist der Mittelmeerraum, die arabische Halbinsel, Afrika, Asien, Mittel- und Südamerika
    kategorie: vorkommen
  - id: reservoir
    text: Brucella abortus kommt meist bei Rindern vor, Brucella Meltensis meist bei Schafen und Ziegen aber auch Kamelen, Brucella suis meist bei Schweinen, Brucella canis meist bei Hunden. 
    kategorie: vorkommen
    quellename: RKI Ratgeber
  - id: umweltresistenz
    text:
    kategorie: vorkommen 
    quellename: RKI Ratgeber 

    
# Zeiten
  - id: inkubationszeit
    text: Die Inkubationszeit beträgt im Regelfall 5 bis 60 Tage
    kategorie: zeiten
  - id: inkubationszeit_min
    text: 
    nummer: 5
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
    nummer: 60
  - id: ansteckungszeit_normal
    text: Menschen sind üblicherweise nicht ansteckend.
    kategorie: zeiten hygkowichtig
  - id: ansteckungszeit_lang 
    text: 
    kategorie: zeiten
    quellename: RKI Ratgeber
  
# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird von den Tieren meist über Lebensmittel, insbesondere Rohmilch übertragen. Eine direkte Übertragung vom Tier auf den Menschen ist ebenfalls möglich. Eine Übertragung von Mensch zu Mensch ist  unwahrscheinlich und betrifft insbesondere Stillen, Bluttransfusion und Geschlechtsverkehr.
    kategorie: uebertragungswege 
    quellename: RKI Ratgeber
    

# Klinik
  - id: symptome
    text: |
      Die Erkrankung äußert sich durch einen fieberhaften Infekt. Dabei kann das Fieber zeitweilig auch verschwinden (undulierendes Fieber)
    kategorie: klinik
  - id: komplikationen
    text: Als Komplikation kann es zu einer chronischen Entzündung mit unspezifischen Allgemeinsymptomen kommen (Mattigkeit, Depression, vermehrtes Schwitzen). Lokalisierte Infektion können viele Organe betreffen, insbesondere Gelenke.
    kategorie: klinik
  - id: krankheitsdauer
    text: 
    kategorie: klinik
  - id: asymptomatik
    text: 90 von 100 immunkompetenten Personen entwickeln keine Symptome.
    kategorie: klinik
  - id: letalität
    text: Weniger als 2 von 100 behandelten erkrankten Personen versterben.
    kategorie: klinik

# Meldung
  - varname: IFSG_7

aktionsbausteine:
  - varname: GETINFO
  - varname: UEBERMITTLUNG
  - varname: AUSBRUCHSUNTERSUCHUNG
  - varname: UNTERRICHTUNG_GA
  - varname: UNTERRICHTUNG_VET
  - aktion: Mütter sollten nicht stillen bzw. ihre Milch abkochen.
    

interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: ERKRANKUNGSBEGINN
  - varname: AUSBRUCHSABKLAERUNG
  - varname: HOSPITALISIERUNG
  - varname: ROHMLICH
  - varname: AUSLANDSAUFENTHALT
  - question: Hatten Sie in den letzten 2 Monaten vor Beginn der Erkrankung Kontakt zu Rindern, Ziegen, Schafen, Schweine, Wildschweine?
    comment: Die Erkrankung ist eine Zoonose, das heißt die meisten Menschen infizieren sich bei Tieren. B. abortus kommt bei Rindern vor, B. melitensis vorwiegend bei Ziegen und Schafen, B. suis bei Schweinen. Das Wildschwein ist unter einheimischen Bedingungen ein Reservoir für Brucella suis, Biotyp 2. Je nachdem, wie eindeutig der Zusammenhang ist, können hieraus Maßnahmen erwachsen. Zum Beispiel wenn ein einziger Bauernhof oder Streichelzoo besucht wurde.
    kategorie: abklaerung
  - question: Arbeiten Sie in einem Labor mit Bakterien?
    comment: Es ist häufig zu Infektionen im Labor gekommen. Wenn sich hier ein Zusammenhang ergibt, sollte die für das Labor zuständige Behörde dem Zusammenhang nachgehen.
    keyword: Laborarbeit
  - question: Vermeiden Sie beim nächsten Mal Rohmilch, Rohmlichkäse und ähnliche Produkte.
    comment: Das ist insbesondere für Risikopersonen empfohlen, d.h. Schwangere, kleine Kinder, Personen mit chronischen Erkrankungen. Das gilt auch für andere Erreger wie z.B. Campylobacter usw.
    keyword: Keine Rohmlich
  - question: Vermeiden Sie beim nächsten Mal nicht ausreichend erhitztes Fleisch
    comment: Dies gilt ganz besonders in Ländern, in denen Brucellose häufig ist, zum Beispiel der Türkei.
    keyword: Kein rohes Fleisch
  - question: Vermeiden Sie im Ausland Kontakt zu Rindern, Ziegen, Schafen, Hausschweine, Wildschweinen und Hunden.
    comment: Dies gilt ganz besonders in Ländern, in denen Brucellose häufig ist, zum Beispiel der Türkei. Wenn das nicht möglich ist versuchen Sie sich nach dem Kontakt mit dem Tier nicht in die Augen oder den Mundbereich zu fassen und waschen Sie sich die Hände.
    keyword: Kein Nutztierkontakt im Ausland
  
quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Brucellose.html
  - name: European center for diesease control (englisch)
    webseite: https://www.ecdc.europa.eu/en/brucellosis
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Brucellose
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/brucellosis/
  - name: World-Health-Organisation (englisch)
    webseite: https://www.who.int/topics/brucellosis/en/
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Brucellosis%22%5BMesh%5D
---

