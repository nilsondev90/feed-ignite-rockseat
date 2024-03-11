import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
/*
  // Caso precisar de mudar de porta
   server: {
    port: 3001,
  } */
})
