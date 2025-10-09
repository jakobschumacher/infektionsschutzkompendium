import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Querschnitt() {
  const { slug } = useParams()
  const [topic, setTopic] = useState(null)
  const [diseases, setDiseases] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch(`/infektionsschutzkompendium/data/querschnitt/${slug}.json`).then(res => res.json()),
      fetch(`/infektionsschutzkompendium/data/index.json`).then(res => res.json())
    ])
      .then(([topicData, indexData]) => {
        setTopic(topicData)

        // Load all diseases for cross-cutting topics
        if (slug === 'hygko_wichtig') {
          Promise.all(
            indexData.diseases.map(d =>
              fetch(`/infektionsschutzkompendium/data/krankheiten/${d.slug}.json`).then(res => res.json())
            )
          ).then(diseasesData => {
            setDiseases(diseasesData)
            setLoading(false)
          })
        } else {
          setLoading(false)
        }
      })
      .catch(err => {
        console.error('Error loading topic:', err)
        setLoading(false)
      })
  }, [slug])

  if (loading) return <div>Lädt...</div>
  if (!topic) return <div>Thema nicht gefunden</div>

  const renderContent = () => {
    if (slug === 'hygko_wichtig') {
      // Show important facts from all diseases
      return diseases.map(disease => {
        const importantFacts = disease.inhalte?.filter(item =>
          item.kategorie?.includes('hygkowichtig') && item.text
        )

        if (!importantFacts || importantFacts.length === 0) return null

        return (
          <section key={disease.slug} className="content-section">
            <h2>{disease.title}</h2>
            <ul>
              {importantFacts.map((fact, idx) => (
                <li key={idx} className="important-item">
                  {fact.text}
                  {fact.quellename && (
                    <div className="note">Quelle: {fact.quellename}</div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )
      })
    } else if (slug.startsWith('vergleich_')) {
      // Comparison topics - show as table or list
      return (
        <section className="content-section">
          <p>Vergleichsübersicht für {topic.title}</p>
          <div className="note">Diese Ansicht wird noch implementiert</div>
        </section>
      )
    } else {
      // General topics with markdown content
      return (
        <section className="content-section">
          <div dangerouslySetInnerHTML={{ __html: topic.content }} />
        </section>
      )
    }
  }

  return (
    <article className="querschnitt">
      <h1>{topic.title}</h1>
      {renderContent()}
    </article>
  )
}

export default Querschnitt
