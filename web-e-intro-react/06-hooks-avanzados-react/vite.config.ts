import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/becalos/web-e-intro-react/06-hooks-avanzados-react/dist/'
})
