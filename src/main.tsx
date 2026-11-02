import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/fraunces/opsz.css'
import '@fontsource-variable/fraunces/opsz-italic.css'
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource/ephesis/latin.css'
import '@fontsource/ephesis/latin-ext.css'
import './index.css'
import App from './App'
import { SettingsProvider } from './lib/settings'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </StrictMode>,
)
