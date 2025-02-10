import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: [
      "src/tests/Home.test.jsx",
      "src/tests/Video.test.jsx"
    ],   
    environment: 'jsdom',
  }
})
