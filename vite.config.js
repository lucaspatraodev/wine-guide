import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  define: {
    __VALUE__: `"${process.env.VALUE}"`,
  },
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
});
