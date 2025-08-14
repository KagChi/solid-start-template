import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    vite: {
        resolve: {
            alias: {
                "@": resolve(dirname(fileURLToPath(import.meta.url)), "src")
            }
        },
        plugins: [
            tailwindcss()
        ]
    },
    server: {
        preset: "cloudflare-pages"
    },
    ssr: false
});
