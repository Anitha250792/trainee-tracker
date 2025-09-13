import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ✅ needed when serving inside Django templates
  server: {
    port: 5173,        // default Vite port
    open: true,        // auto-open browser
    host: "127.0.0.1", // ensure localhost works
  },
  build: {
    outDir: 'dist',    // where bundled files go
  },
})
