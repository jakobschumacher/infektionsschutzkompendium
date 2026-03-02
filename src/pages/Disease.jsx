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

  const resolveVariable = (text) => {
    if (!text || !variablen) return text
    return text.replace(/\{\{(\w+)\}\}/g, (match, varName) => {
      return variablen[varName] || match
    })
  }

  const inferCategory = (item) => {
    const explicitCategory = item?.kategorie?.trim()
    if (explicitCategory) return explicitCategory

    const marker = `${item?.id || ''} ${item?.varname || ''}`.toLowerCase()
    if (marker.includes('ifsg') || marker.includes('meldepflicht')) {
      return 'meldepflicht'
    }

    return 'andere'
  }

  const groupByCategory = (items) => {
    const groups = {}
    items?.forEach(item => {
      let cat = inferCategory(item)
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
      'klinik': 'Krankheitszeichen',
      'meldepflicht': 'Meldepflicht',
      'andere': 'Weitere Fakten'
    }
    return titles[cat] || cat
  }

  const grouped = groupByCategory(disease.inhalte)

  const mapSectionItem = (item, fieldName) => {
    if (!item) return null

    if (item.varname && variablen) {
      const varData = variablen[item.varname]
      if (varData?.text) {
        return {
          title: resolveVariable(varData.text),
          note: resolveVariable(varData.beschreibung)
        }
      }
    }

    if (item[fieldName]) {
      return {
        title: resolveVariable(item[fieldName]),
        note: resolveVariable(item.beschreibung)
      }
    }

    return null
  }

  const massnahmenItems = (disease.aktionsbausteine || [])
    .map(item => mapSectionItem(item, 'aktion'))
    .filter(Boolean)

  const stichpunkteItems = (disease.interview || [])
    .map(item => mapSectionItem(item, 'question'))
    .filter(Boolean)

  const linkItems = (disease.quellen || [])
    .filter(quelle => quelle?.name && quelle?.webseite)

  const renderMassnahmen = () => {
    if (!massnahmenItems.length) {
      return <div className="content-section">Keine Maßnahmen verfügbar</div>
    }

    return (
      <section className="content-section">
        <h2>Übliche Maßnahmen</h2>
        <ul>
          {massnahmenItems.map((item, idx) => {
            return (
              <li key={idx}>
                <strong>{item.title}</strong>
                {item.note && (
                  <div className="note">{item.note}</div>
                )}
              </li>
            )
          })}
        </ul>
      </section>
    )
  }

  const renderStichpunkte = () => {
    if (!stichpunkteItems.length) {
      return <div className="content-section">Keine Interview-Stichpunkte verfügbar</div>
    }

    return (
      <section className="content-section">
        <h2>Stichpunkte für ein Interview</h2>
        <ul>
          {stichpunkteItems.map((item, idx) => {
            return (
              <li key={idx}>
                <strong>{item.title}</strong>
                {item.note && (
                  <div className="note">{item.note}</div>
                )}
              </li>
            )
          })}
        </ul>
      </section>
    )
  }

  const renderErregerFakten = () => {
    const renderItem = (item, idx) => {
      let content = null
      const isImportant = item.isImportant

      if (item.text) {
        content = resolveVariable(item.text)
      } else if (item.varname && variablen) {
        const varData = variablen[item.varname]
        if (varData) {
          content = (
            <>
              <strong>{resolveVariable(varData.text)}</strong>
              {varData.beschreibung && (
                <div className="note">{resolveVariable(varData.beschreibung)}</div>
              )}
            </>
          )
        }
      }

      if (!content) return null

      return (
        <li key={idx} className={isImportant ? 'important-item' : ''}>
          {content}
        </li>
      )
    }

    return (
      <>
        {grouped.erregerdaten && grouped.erregerdaten.some(item => renderItem(item, -1)) && (
          <section className="content-section">
            <h2>Fakten über den Erreger</h2>
            <ul>
              {grouped.erregerdaten.map((item, idx) => renderItem(item, idx))}
            </ul>
          </section>
        )}
        {Object.entries(grouped)
          .filter(([cat]) => cat !== 'erregerdaten')
          .map(([category, items]) => {
            const renderedItems = items.map((item, idx) => renderItem(item, idx)).filter(Boolean)
            if (!renderedItems.length) return null

            return (
              <section key={category} className="content-section">
                <h2>{getCategoryTitle(category)}</h2>
                <ul>{renderedItems}</ul>
              </section>
            )
          })}
      </>
    )
  }

  const renderLinks = () => {
    if (!linkItems.length) {
      return <div className="content-section">Keine Links verfügbar</div>
    }

    return (
      <section className="content-section">
        <h2>Links</h2>
        <ul>
          {linkItems.map((quelle, idx) => (
            <li key={idx}>
              <a href={quelle.webseite} target="_blank" rel="noopener noreferrer">
                {quelle.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  const hasFakten = Object.values(grouped).some(items =>
    items.some(item => item.text || (item.varname && variablen?.[item.varname]))
  )

  const sectionConfig = [
    { key: 'massnahmen', label: 'Übliche Maßnahmen', available: massnahmenItems.length > 0 },
    { key: 'stichpunkte', label: 'Interview-Stichpunkte', available: stichpunkteItems.length > 0 },
    { key: 'fakten', label: 'Fakten', available: hasFakten },
    { key: 'links', label: 'Links', available: linkItems.length > 0 }
  ].filter(section => section.available)

  const effectiveActiveSection = sectionConfig.some(section => section.key === activeSection)
    ? activeSection
    : sectionConfig[0]?.key

  return (
    <article className="disease">
      <h1>{disease.title}</h1>

      <div className="disease-header">
        {disease.basisdaten?.bild && (
          <img
            src={disease.basisdaten.bild}
            alt={disease.title}
            className="disease-image"
          />
        )}
        {disease.basisdaten?.kurzbeschreibung && (
          <p className="lead">{disease.basisdaten.kurzbeschreibung}</p>
        )}
      </div>

      {sectionConfig.length > 0 && (
        <nav className="disease-nav">
          {sectionConfig.map(section => (
            <button
              key={section.key}
              className={effectiveActiveSection === section.key ? 'active' : ''}
              onClick={() => setActiveSection(section.key)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      )}

      <div className="disease-content">
        {effectiveActiveSection === 'massnahmen' && renderMassnahmen()}
        {effectiveActiveSection === 'stichpunkte' && renderStichpunkte()}
        {effectiveActiveSection === 'fakten' && renderErregerFakten()}
        {effectiveActiveSection === 'links' && renderLinks()}
        {!effectiveActiveSection && (
          <div className="content-section">Für diese Krankheit sind noch keine Inhalte verfügbar.</div>
        )}
      </div>
    </article>
  )
}

export default Disease
