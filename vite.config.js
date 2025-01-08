import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['framer-motion', 'lucide-react']
    }
  },
  optimizeDeps: {
    include: ['framer-motion', 'lucide-react']
  }
})
