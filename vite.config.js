import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Single export; removed duplicate block
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages project sites: replace with your repo name
  base: '/nam-official-demo/',
})
