import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppGrid from './AppGrid.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppGrid />
  </StrictMode>,
)
