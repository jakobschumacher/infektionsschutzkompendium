import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import './themes.css'

const rootElement = document.getElementById('root')

// Use hydrateRoot for pre-rendered content (react-snap), createRoot otherwise
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <BrowserRouter basename="/infektionsschutzkompendium">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter basename="/infektionsschutzkompendium">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}
