import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Single export; removed duplicate block
export default defineConfig({
  plugins: [react()],
})
