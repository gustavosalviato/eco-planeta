/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: "istanbul",
      reportsDirectory: './__tests__/coverage'
    },
    // reporters: ["html"],
    globals: true,
    environment: "jsdom",
  },
});
