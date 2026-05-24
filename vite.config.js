import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin to fix MIME type for MP3 files in dev server
function mp3MimePlugin() {
  return {
    name: 'mp3-mime-fix',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.endsWith('.mp3')) {
          res.setHeader('Content-Type', 'audio/mpeg')
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), mp3MimePlugin()],
})
