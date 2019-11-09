---
title: Botulismus
layout: post
fortbildung: fortbildung/Botulismus.html

author: Jakob Schumacher

basisdaten:
  bild: hhttps://upload.wikimedia.org/wikipedia/commons/f/f0/Clostridium_botulinum.jpg
  bildcredits: https://commons.wikimedia.org/wiki/File:Clostridium_botulinum.jpg
  bildautor: CDC
  kurzbeschreibung: Botulismus ist eine besondere Form der Lebensmittelvergiftung. Nur in seltenen Fällen kommt es zu einer Infektion.

inhalte:  
# Erregerdaten
  - id: erregername
    text: Botulismus wird durch ein Toxin des Erreger Clostridium Botulinum hervorgerufen. 
    kategorie: erregerdaten
  - id: erregertyp
    text: Der Erreger ist ein Bakterium. 
    kategorie: erregerdaten
  - id: erregergruppen
    text:  
    quellename: RKI-Ratgeber 
    kategorie: erregerdaten
  - id: toxine
    text: Clostridium botulinum produziert Toxine, die die Erkrankung hervorrufen. 
    kategorie: erregerdaten
  - id: erregergruppenunterschiede
    text: 
    kategorie: erregerdaten
  - id: alternativenamen
    text: Fleischvergiftung, Wurstvergiftung, Allantiasis
    kategorie: erregerdaten
    
# Vorkommen
  - id: vorkommen_deu
    text: In Deutschland werden etwa 10 Fälle pro Jahr gemeldet
    kategorie: vorkommen
    quellename: Survstat
    quelleurl: https://survstat.rki.de/
  - id: vorkommen_welt
    text: Der Erreger kommt weltweit vor
    kategorie: vorkommen
  - id: reservoir
    text: Das Reservoir sind insbesondere Nagetiere. Die nicht erkranken und den Erreger mit dem Urin ausscheiden. Viele Tierarten können Leptospirose bekommen und den Erreger weitertragen.  
    kategorie: vorkommen
    quellename: RKI Ratgeber
  - id: umweltresistenz
    text: Die Bakterien können in feuchten und warmen Gebieten Monate lang infektiös bleiben. Außerhalb von Organismen können sie sich aber nicht vermehren.
    kategorie: vorkommen 
    quellename: RKI Ratgeber 

    
# Zeiten
  - id: inkubationszeit
    text: Die Inkubationszeit beträgt 2 bis 30 Tage im Regelfall 7 bis 14 Tage
    kategorie: zeiten
  - id: inkubationszeit_min
    text: 
    nummer: 2
    kategorie: zeiten
  - id: inkubationszeit_max
    text:
    kategorie: zeiten
    nummer: 30
  - id: ansteckungszeit_normal
    text: Menschen scheiden den Erreger üblicherweise in den ersten zwei Wochen der Erkrankung aus. 
    kategorie: zeiten 
  - id: ansteckungszeit_lang 
    text: 
    kategorie: zeiten

  
# Übertragungswege
  - id: uebertragungswege
    text: | 
      Der Erreger wird durch den Urin von Tieren (meist Nagetiere) ausgeschieden, der Erreger verbleibt dann im Schlamm oder Wasser. Menschen können sich über kleine Wunden oder Schleimhäute infizieren.  Eine Übertragung von Mensch zu Mensch ist selten.
    kategorie: uebertragungswege hygkowichtig
    quellename: RKI Ratgeber
    

# Klinik
  - id: symptome
    text: |
      Das Krankheitsbild ist variabel und beinhaltet Krankheitszeichen wie bei einer Grippe: Fieber, Gelenkschmerzen, Muskelschmerzen, Abgeschlagenheit. Häufig tritt das Fieber nach einer Besserung erneut auf. 
    kategorie: klinik
  - id: komplikationen
    text: Bei etwa 1 von 10 Erkrankten kann es zu schwerwiegenden Komplikationen kommen. Diese können fast jedes Organ im Körper betreffen. Häufig sind die Schäden an der Niere, der Leber, der Milz und der Lunge. Auch das Herz und die Blutbildung können betroffen sein, ebenso die Hirnhäute.
    kategorie: klinik
  - id: krankheitsdauer
    text: 
    kategorie: klinik
  - id: asymptomatik
    text: Etwa 9 von 10 Erkrankten entwickeln keine oder nur milde Krankheitszeichen.
    kategorie: klinik
  - id: letalität
    text: 
    kategorie: klinik

# Meldung
  - varname: IFSG_7

aktionsbausteine:
  - varname: GETINFO
  - varname: UEBERMITTLUNG
  - varname: AUSBRUCHSUNTERSUCHUNG
  - varname: UNTERRICHTUNG_GA
  - varname: UNTERRICHTUNG_VET
  - aktion: Überprüfung der Rattenkontrolle im Umfeld der erkrankten Person
    

interview:     
  - varname: KRANKHEITSZEICHEN
  - varname: ERKRANKUNGSBEGINN
  - varname: AUSBRUCHSABKLAERUNG
  - varname: HOSPITALISIERUNG
  - varname: AUSLANDSAUFENTHALT
  - question: Wo könnten Sie Kontakt zu Nagetieren oder deren Ausscheidungen gehabt haben?
    comment: Dies ist die wahrscheinlichste Quelle für eine Erkrankung. Hierdurch lässt sich gegebenenfalls die Quelle abstellen.
    keyword: Nagetierurin
  - question: Hat die erkrankte Person Haustiere oder anderen Kontakt zu Tieren.
    comment: Hier müsste gegebenenfalls das Veterinäramt informiert werden. Falls es sich um einen Hund handelt ist der Impfstatus des Hundes zu erfragen
    keyword: Haustiere
  - question: Waren Sie Schwimmen oder Baden in Gewässern, die nicht regelmäßig überprüft werden.
    comment: Es gab Erkrankungsfälle nach Triatholn-Events im Brackwasser.
    keyword: Unsauberes Badewasser
  - question: Sie sollten darauf achten, dass für zwei Wochen Niemand mit Ihrem Urin in Berührung kommt.
    comment: Sekundäre Fälle sind nicht häufig beschrieben, eine Übertragung ist aber möglich.
    keyword: Urin
   
  
quellen:
  - name: Ratgeber des Robert Koch-Instituts
    webseite: https://www.rki.de/DE/Content/Infekt/EpidBull/Merkblaetter/Ratgeber_Botulismus.html
  - name: European center for diesease control (englisch)
    webseite: https://ecdc.europa.eu/en/botulism
  - name: Wikipedia-Eintrag
    webseite: https://de.wikipedia.org/wiki/Leptospirose
  - name: US-Center for diesease control (englisch)
    webseite: https://www.cdc.gov/leptospirosis/index.html
  - name: World-Health-Organisation (englisch)
    webseite: https://apps.who.int/iris/bitstream/handle/10665/42667/WHO_CDS_CSR_EPH_2002.23.pdf;jsessionid=23DDE9D9F7F66F977B4701E5D332E6CA?sequence=1
  - name: Pubmed - Sammlung wissenschaftlicher Publikationen (englisch)
    webseite: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Leptospirosis%22%5BMesh%5D
---


 ecdc: 
 wikipedia: https://de.wikipedia.org/wiki/Botulismus
 cdc: https://www.cdc.gov/botulism/index.html
 phe: https://www.gov.uk/government/publications/botulism-clinical-and-public-health-management/botulism-clinical-and-public-health-management
 pubmed: https://www.ncbi.nlm.nih.gov/pubmed?term=%22Botulism%22%5BMesh%5D
 aerzteblatt:
 awmf: https://www.awmf.org/uploads/tx_szleitlinien/030-109l_S1_Botulismus_2017-11.pdf
 apothekenumschau: https://www.apotheken-umschau.de/Botulismus
 bfr: https://www.bfr.bund.de/de/fragen_und_antworten_zu_botulismus-70355.html
 ---
