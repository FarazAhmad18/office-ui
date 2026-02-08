import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Prevent browser from restoring scroll position on refresh
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

// Clear any hash and scroll to top
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0)
})
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname)
}
window.scrollTo(0, 0)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
