import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel expects 'dist' by default
  },
  server: {
    port: 5173,
  },
});
