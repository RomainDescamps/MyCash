// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-mongoose", "vuetify-nuxt-module", "@vite-pwa/nuxt"],
  mongoose: {
    uri: 'mongodb://romain-descamps.freeboxos.fr:27017/MyCash',
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
});