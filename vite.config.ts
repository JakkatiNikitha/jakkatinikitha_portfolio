import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/jakkatinikitha_portfolio/",  // VERY IMPORTANT
});
