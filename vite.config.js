import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: If deploying to GitHub Pages at a project URL (username.github.io/repo),
// set base to '/repo-name/'. If using a custom domain or username.github.io root,
// keep base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
