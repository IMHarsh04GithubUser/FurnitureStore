import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { EProvider } from './Econtext/Econtext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EProvider>
      <App />
    </EProvider>

  </StrictMode>,
)
