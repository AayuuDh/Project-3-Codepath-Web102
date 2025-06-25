import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Project-3-Codepath-Web102/", 
  plugins: [react()],
})