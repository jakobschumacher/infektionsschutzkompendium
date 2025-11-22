function About() {
  return (
    <article className="about">
      <h1>Über diese Seite</h1>

      <div className="content-section">
        <h2>Entstehung</h2>
        <p>
          Diese Seite ist aus einem Lehrprojekt an der Akademie für öffentliches Gesundheitswesen
          entstanden. Sie stellt dar, wie Gesundheitsämter beim Auftreten einer Infektionskrankheit
          vorgehen sollten.
        </p>
      </div>

      <div className="content-section">
        <h2>Inhalt und Zweck</h2>
        <p>
          Das Infektionsschutzkompendium bietet einen Überblick über die wichtigsten meldepflichtigen
          Infektionskrankheiten und Querschnittsthemen im Infektionsschutz. Es richtet sich in erster
          Linie an Mitarbeiterinnen und Mitarbeiter in Gesundheitsämtern und soll als praktische
          Arbeitshilfe bei der Infektionsschutzermittlung dienen.
        </p>
      </div>

      <div className="content-section">
        <h2>Disclaimer</h2>
        <p>
          Die hier dargestellten Inhalte stellen ausschließlich persönliche Meinungen und Einschätzungen
          dar. Sie sind nicht als offizielle Handlungsanweisungen oder verbindliche Vorgaben zu verstehen.
        </p>
        <p>
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird keine Gewähr übernommen.
          Die Informationen ersetzen nicht die Konsultation der jeweils aktuellen Fachliteratur,
          RKI-Empfehlungen und rechtlichen Grundlagen. Jedes Gesundheitsamt sollte seine Vorgehensweise
          an die jeweilige regionale Situation und aktuelle Rechtslage anpassen.
        </p>
        <p>
          Die Nutzung der Inhalte erfolgt auf eigene Verantwortung. Für Schäden oder rechtliche
          Konsequenzen, die aus der Anwendung der hier dargestellten Informationen entstehen, wird
          keine Haftung übernommen.
        </p>
      </div>

      <div className="content-section">
        <h2>Rechtliche Grundlagen</h2>
        <p>
          Bei allen Maßnahmen im Infektionsschutz sind stets die aktuellen gesetzlichen Grundlagen,
          insbesondere das <a href="https://www.gesetze-im-internet.de/ifsg/" target="_blank" rel="noopener noreferrer">
          Infektionsschutzgesetz (IfSG)</a>, sowie die Empfehlungen des Robert Koch-Instituts zu beachten.
        </p>
      </div>
    </article>
  )
}

export default About
