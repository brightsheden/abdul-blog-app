import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  // content: [
  //   'node_modules/daisyui/dist/**/*.js',
  //   'node_modules/react-daisyui/dist/**/*.js',
  // ],
  plugins: [react(), tailwindcss()],
})


