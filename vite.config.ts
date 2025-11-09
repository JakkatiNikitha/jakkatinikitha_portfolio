import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace "jakkatinikitha-portfolio" with your actual GitHub repository name if different
export default defineConfig({
  plugins: [react()],
  base: '/jakkatinikitha_portfolio/', // 👈 This is required for GitHub Pages deployment
});
