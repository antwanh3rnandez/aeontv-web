import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
/*   server: {
    // Configura el servidor para manejar solicitudes de rutas desconocidas
    // redirigiendo a tu aplicación principal (index.html)
    proxy: {
      '/': 'https://www.spacetv.com.mx', // Ajusta el puerto según tu configuración
    },
  }, */
})
