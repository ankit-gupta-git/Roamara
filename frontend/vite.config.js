import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Project name changed to Roamara
const projectName = 'Roamara';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
