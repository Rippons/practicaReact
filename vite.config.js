import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias para resolver correctamente 'primereact/icons'
      'primereact/icons': 'primereact/icons', // Asegura que Vite resuelva los iconos correctamente
      // Puedes agregar más alias si es necesario
    },
  },
})