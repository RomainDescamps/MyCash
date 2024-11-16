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
    },
  },
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
});