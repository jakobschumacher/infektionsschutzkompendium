import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Disease() {
  const { slug } = useParams()
  const [disease, setDisease] = useState(null)
  const [variablen, setVariablen] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('massnahmen')

  useEffect(() => {
    Promise.all([
      fetch(`/infektionsschutzkompendium/data/krankheiten/${slug}.json`).then(res => res.json()),
      fetch(`/infektionsschutzkompendium/data/variablen.json`).then(res => res.json()).catch(() => null)
    ])
      .then(([diseaseData, variablenData]) => {
        setDisease(diseaseData)
        setVariablen(variablenData)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading disease:', err)
        setLoading(false)
      })
  }, [slug])

  if (loading) return <div>Lädt...</div>
  if (!disease) return <div>Krankheit nicht gefunden</div>

  const groupByCategory = (items) => {
    const groups = {}
    items?.forEach(item => {
      // Extract main category (remove "hygkowichtig" marker and commas)
      let cat = item.kategorie || 'andere'
      const isImportant = cat.includes('hygkowichtig')
      cat = cat.replace(/\s*hygkowichtig\s*/g, '')
                .replace(/,/g, '')
                .trim() || 'andere'

      if (!groups[cat]) groups[cat] = []
      groups[cat].push({
        ...item,
        isImportant: isImportant
      })
    })
    return groups
  }

  const getCategoryTitle = (cat) => {
    const titles = {
      'erregerdaten': 'Über den Erreger',
      'vorkommen': 'Vorkommen',
      'zeiten': 'Zeiten',
      'uebertragungswege': 'Übertragungswege',
      'klinik': 'Krankheitszeichen'
    }
    return titles[cat] || cat
  }

  const grouped = groupByCategory(disease.inhalte)

  const resolveVariable = (text) => {
    if (!text || !variablen) return text
    return text.replace(/\{\{(\w+)\}\}/g, (match, varName) => {
      return variablen[varName] || match
    })
  }

  const renderMassnahmen = () => {
    if (!disease.aktionsbausteine || !variablen) {
      return <div className="content-section">Keine Maßnahmen verfügbar</div>
    }

    return (
      <section className="content-section">
        <h2>Übliche Maßnahmen</h2>
        <ul>
          {disease.aktionsbausteine.map((item, idx) => {
            const varData = variablen[item.varname]
            if (!varData) return null
            return (
              <li key={idx}>
                <strong>{varData.text}</strong>
                {varData.beschreibung && (
                  <div className="note">{varData.beschreibung}</div>
                )}
              </li>
            )
          })}
        </ul>
      </section>
    )
  }

  const renderStichpunkte = () => {
    if (!disease.interview || !variablen) {
      return <div className="content-section">Keine Interview-Stichpunkte verfügbar</div>
    }

    return (
      <section className="content-section">
        <h2>Stichpunkte für ein Interview</h2>
        <ul>
          {disease.interview.map((item, idx) => {
            const varData = variablen[item.varname]
            if (!varData) return null
            return (
              <li key={idx}>
                <strong>{varData.text}</strong>
                {varData.beschreibung && (
                  <div className="note">{varData.beschreibung}</div>
                )}
              </li>
            )
          })}
        </ul>
      </section>
    )
  }

  const renderErregerFakten = () => {
    return (
      <>
        {grouped.erregerdaten && (
          <section className="content-section">
            <h2>Fakten über den Erreger</h2>
            <ul>
              {grouped.erregerdaten.map((item, idx) => (
                item.text && (
                  <li key={idx} className={item.isImportant ? 'important-item' : ''}>
                    {item.text}
                  </li>
                )
              ))}
            </ul>
          </section>
        )}
        {Object.entries(grouped).filter(([cat]) => cat !== 'erregerdaten').map(([category, items]) => (
          <section key={category} className="content-section">
            <h2>{getCategoryTitle(category)}</h2>
            <ul>
              {items.map((item, idx) => (
                item.text && (
                  <li key={idx} className={item.isImportant ? 'important-item' : ''}>
                    {item.text}
                  </li>
                )
              ))}
            </ul>
          </section>
        ))}
      </>
    )
  }

  const renderLinks = () => {
    return (
      <>
        {disease.quellen && disease.quellen.length > 0 && (
          <section className="content-section">
            <h2>Links</h2>
            <ul>
              {disease.quellen.map((quelle, idx) => (
                <li key={idx}>
                  <a href={quelle.webseite} target="_blank" rel="noopener noreferrer">
                    {quelle.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </>
    )
  }

  return (
    <article className="disease">
      <div className="disease-header">
        {disease.basisdaten?.bild && (
          <img
            src={disease.basisdaten.bild}
            alt={disease.title}
            className="disease-image"
          />
        )}
        <div>
          <h1>{disease.title}</h1>
          {disease.basisdaten?.kurzbeschreibung && (
            <p className="lead">{disease.basisdaten.kurzbeschreibung}</p>
          )}
        </div>
      </div>

      <nav className="disease-nav">
        <button
          className={activeSection === 'massnahmen' ? 'active' : ''}
          onClick={() => setActiveSection('massnahmen')}
        >
          Übliche Maßnahmen
        </button>
        <button
          className={activeSection === 'stichpunkte' ? 'active' : ''}
          onClick={() => setActiveSection('stichpunkte')}
        >
          Interview-Stichpunkte
        </button>
        <button
          className={activeSection === 'fakten' ? 'active' : ''}
          onClick={() => setActiveSection('fakten')}
        >
          Fakten
        </button>
        <button
          className={activeSection === 'links' ? 'active' : ''}
          onClick={() => setActiveSection('links')}
        >
          Links
        </button>
      </nav>

      <div className="disease-content">
        {activeSection === 'massnahmen' && renderMassnahmen()}
        {activeSection === 'stichpunkte' && renderStichpunkte()}
        {activeSection === 'fakten' && renderErregerFakten()}
        {activeSection === 'links' && renderLinks()}
      </div>
    </article>
  )
}

export default Disease
