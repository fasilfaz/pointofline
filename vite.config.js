import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'lucide-react': 'lucide-react/dist/esm/lucide-react'
    }
  },
  build: {
    rollupOptions: {
      external: ['framer-motion', 'lucide-react']
    }
  },
  optimizeDeps: {
    include: ['framer-motion', 'lucide-react']
  },
  server: {
    cors: {
      origin: '*',
      headers: ['Content-Type'],
      exposeHeaders: ['Content-Length'],
      credentials: true,
      maxAge: 86400,
    },
    hmr: {
      overlay: true,
    },
  },
})