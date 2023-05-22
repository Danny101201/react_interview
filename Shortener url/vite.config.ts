import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  define: {
    '__APP_VERSION__': JSON.stringify('0.0.0')
  },
  plugins: [react()]
})
