import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        phonebook: 'src/projects/phonebook.html',
        goldenGrouse: 'src/projects/golden-grouse.html',
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})