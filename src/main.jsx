import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { registerSW } from 'virtual:pwa-register'
import App from './App'
import theme from './theme'

// registra el service worker (lo genera vite-plugin-pwa en el build)
registerSW({ immediate: true })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ThemeProvider aplica el tema; CssBaseline hace el reset de estilos */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)