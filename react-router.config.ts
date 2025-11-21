import type { Config } from "@react-router/dev/config";

const rawBasePath = process.env.PUBLIC_BASE_PATH ?? "/";
const basename = rawBasePath === "/" ? rawBasePath : rawBasePath.replace(/\/+$/, "");

export default {
  // Disable SSR so the build emits a static SPA bundle for GitHub Pages
  ssr: false,
  // Keep links and navigation working when the site is served from a sub-path
  basename,
} satisfies Config;
