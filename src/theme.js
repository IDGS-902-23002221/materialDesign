import { createTheme } from '@mui/material/styles'

// tema global: colores, tipografia y breakpoints
export default createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f4f4f4' // fondo general gris claro
    },
    text: {
      primary: '#111111'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: { fontWeight: 700 }
  },
  // breakpoints por defecto de mui, los dejo explicitos para que se entienda
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }
  }
})