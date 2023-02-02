// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            title: 'Consultoría Legal',
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
            meta: [
                { name: 'description', content: 'My amazing site.' },
            ],
            script: [
                { src: "https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.8.1/cdn.min.js", },
            ],
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/css/main.css'],
    head: {
        script: [
            { src: "https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.8.1/cdn.min.js", },
        ],
    },
    build: {
    },
    routeRules: {
        '/': { ssr: true },
        '/servicio/**': { ssr: true },
    },
    nitro: {
        preset: 'firebase'
    },
    runtimeConfig: {
        public: {
            MODO_PROYECTO: 'dev'
        }
    }
})
