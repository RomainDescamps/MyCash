// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-mongoose", "vuetify-nuxt-module", "@vite-pwa/nuxt", '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  mongoose: {
    uri: 'mongodb://romain-descamps.freeboxos.fr:27017/MyCash',
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
  pwa: {
    manifest: {
      name: 'MyCash',
      short_name: 'MyCash',
      description: 'MyCash is a simple and efficient personal finance management tool.',
      lang: 'fr',
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#4DBA87",
      icons: [
        {
          src: "/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    },
  },
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
});