import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target:'http://localhost:3000', // <-- proxy /api requests to backend on port 3000
      } 
    },
  },
})
