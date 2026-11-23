import { Paper, Typography } from '@mui/material'

// bloque reutilizable: solo muestra el adjetivo, el span lo maneja el padre
export default function SeccionGrid({ titulo }) {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: 'black',        // fondo negro como en la imagen
        color: 'white',          // texto blanco
        p: 2,                    // padding interno
        minHeight: 90,           // altura minima para que se vean cuadrados
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 1
      }}
    >
      {/* titulo del atributo */}
      <Typography variant="subtitle2" fontWeight={700}>
        {titulo}
      </Typography>
    </Paper>
  )
}