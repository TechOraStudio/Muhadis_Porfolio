
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === 'github' ? '/Muhadis_Porfolio/' : '/',
}))
