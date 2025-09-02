import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// export default defineConfig({
//   plugins: [react()],
//   base: '/my-portfolio-website/', //  must match your repo name
// })

// If deploying to GitHub Pages, set this environment variable before building
const isGithubPages = process.env.GH_PAGES === 'true'

export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? '/my-portfolio-website/' : '/', 
})

