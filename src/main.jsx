import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { EProvider } from './Econtext/Econtext'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EProvider>
      <App />
    </EProvider>

  </StrictMode>,
)
