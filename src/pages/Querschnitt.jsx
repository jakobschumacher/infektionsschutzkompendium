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

        // Load all diseases for cross-cutting topics and comparisons
        if (slug === 'hygko_wichtig' || slug.startsWith('vergleich_')) {
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
      // Comparison topics - show as table
      // Determine which field to search for based on the slug
      let searchId = ''
      if (slug === 'vergleich_inkubationszeiten') {
        searchId = 'inkubationszeit'
      } else if (slug === 'vergleich_reservoir') {
        searchId = 'reservoir'
      } else if (slug === 'vergleich_uebertragungswege') {
        searchId = 'uebertragungswege'
      }

      // Build comparison data
      const comparisonData = diseases
        .map(disease => {
          const items = disease.inhalte?.filter(item =>
            item.id?.includes(searchId)
          ) || []

          if (items.length === 0) return null

          return {
            title: disease.title,
            content: items.map(item => item.text || '').join(', ')
          }
        })
        .filter(item => item !== null)

      return (
        <section className="content-section">
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '1rem'
          }}>
            <thead>
              <tr>
                <th style={{
                  textAlign: 'left',
                  padding: '0.75rem',
                  borderBottom: '2px solid var(--border-color)',
                  fontWeight: '600'
                }}>Krankheit</th>
                <th style={{
                  textAlign: 'left',
                  padding: '0.75rem',
                  borderBottom: '2px solid var(--border-color)',
                  fontWeight: '600'
                }}>{topic.title.replace('Vergleich der ', '')}</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx}>
                  <td style={{
                    padding: '0.75rem',
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: '500'
                  }}>{row.title}</td>
                  <td style={{
                    padding: '0.75rem',
                    borderBottom: '1px solid var(--border-color)'
                  }}>{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )
    } else if (topic.sections && topic.sections.length > 0) {
      // Topics with structured sections
      return topic.sections.map((section, idx) => {
        // Skip sections with empty items (used as headers)
        if (!section.items || section.items.length === 0) {
          return (
            <h2 key={idx} style={{ marginTop: '2rem', fontSize: '1.8rem', color: 'var(--text-primary)' }}>
              {section.title}
            </h2>
          )
        }

        return (
          <section key={idx} className="content-section">
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </section>
        )
      })
    } else {
      return (
        <section className="content-section">
          <p>Keine Inhalte verfügbar</p>
        </section>
      )
    }
  }

  return (
    <article className="querschnitt">
      <h1>{topic.title}</h1>
      {topic.intro && (
        <div className="content-section">
          <p className="lead">{topic.intro}</p>
        </div>
      )}
      {renderContent()}
    </article>
  )
}

export default Querschnitt
