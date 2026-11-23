import { Container, Grid, Box } from '@mui/material'
import SeccionGrid from './components/SeccionGrid'
import { atributos } from './data/persona'

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* contenedor centrado con ancho maximo, sin barra superior */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* un solo grid de 12 columnas; el wrap arma las filas solo */}
        <Grid container spacing={2}>
          {atributos.map((a) => (
            // xs 12 en movil para apilar; desde md usa el span real
            <Grid key={a.id} size={{ xs: 12, md: a.span }}>
              <SeccionGrid titulo={a.titulo} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}