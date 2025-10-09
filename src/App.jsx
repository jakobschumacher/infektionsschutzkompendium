import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Disease from './pages/Disease'
import Querschnitt from './pages/Querschnitt'
import ThemeSwitcher from './components/ThemeSwitcher'
import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="header-content">
            <img src="/infektionsschutzkompendium/logo.png" alt="Logo" className="header-logo" />
            <div>
              <h1>
                <Link to="/">Infektionsschutzkompendium</Link>
              </h1>
              <p className="subtitle">Infektionsschutzwissen von Gesundheitsämtern für Gesundheitsämter</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog/:slug" element={<Disease />} />
          <Route path="/querschnitt/:slug" element={<Querschnitt />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Infektionsschutzkompendium |
            <a href="https://github.com/jakobschumacher/infektionsschutzkompendium" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </footer>

      <ThemeSwitcher />
    </div>
  )
}

export default App
