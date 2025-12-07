import { defineConfig } from 'vite'

export default defineConfig({
    base: '/munal-interactive-museum/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html'
            }
        }
    }
})
