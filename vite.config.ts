import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // 깃허브 저장소 이름으로 변경
  define: {
    __BASE_PATH__: JSON.stringify("/"),
  },
});
