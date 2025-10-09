import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/infektionsschutzkompendium/data/index.json')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading data:', err)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Lädt...</div>

  return (
    <div>
      <section className="section">
        <h2>Infektionskrankheiten</h2>
        <p>Gesprächsleitfäden für alle meldepflichtigen Infektionskrankheiten</p>
        <ul className="disease-list">
          {data?.diseases?.map(disease => (
            <li key={disease.slug}>
              <Link to={`/katalog/${disease.slug}`}>
                <h3>{disease.title}</h3>
                {disease.kurzbeschreibung && (
                  <p className="description">{disease.kurzbeschreibung}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Querschnittsthemen</h2>
        <p>Übergreifende Themen im Infektionsschutz</p>
        <ul className="topic-list">
          {data?.topics?.map(topic => (
            <li key={topic.slug}>
              <Link to={`/querschnitt/${topic.slug}`}>
                {topic.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home
