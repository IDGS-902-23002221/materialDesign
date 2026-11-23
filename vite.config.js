import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// configuracion principal: react + pwa
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // actualiza el sw solo, sin pedir confirmacion
      registerType: 'autoUpdate',
      // archivos que se copian tal cual a public/
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      // manifest que el navegador lee para permitir instalar
      manifest: {
        name: 'Material Desing - Mi Perfil',
        short_name: 'Mi Perfil',
        description: 'App con MUI y grid de 12 columnas',
        lang: 'es',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          // el maskable es para iconos adaptativos en android
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      },
      // permite probar el sw tambien en npm run dev
      devOptions: { enabled: true },
      // precachea tambien imagenes e iconos para que funcionen offline
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,ico,svg,woff2}']
      }
    })
  ]
})