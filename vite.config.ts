import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        checker({
            typescript: true,
        }),
        eslint({
            fix: true,
        }),
    ],
});
