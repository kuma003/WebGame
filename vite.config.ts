import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const publicBasePath = process.env.PUBLIC_BASE_PATH ?? "/";

export default defineConfig({
  base: publicBasePath.endsWith("/") ? publicBasePath : `${publicBasePath}/`,
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
