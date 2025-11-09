import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for Netlify deployment
export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ important: use root for Netlify
});
