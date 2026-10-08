import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Scheduled blog posts (publishAt in the future) are visible everywhere
    // except the real production site. VERCEL_ENV is set by Vercel during
    // its builds ("production" / "preview"); locally it's undefined.
    __SHOW_SCHEDULED_POSTS__: JSON.stringify(process.env.VERCEL_ENV !== 'production'),
  },
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    host: true,
  },
})
