import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  
  // 🛑 CORRECT LOCATION: build property is now at the top level
  build: {
    outDir: 'docs', // This correctly tells Vite to output to the 'docs' folder
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // 🛑 REMOVED: The incorrect nested build property was here
  },
}));