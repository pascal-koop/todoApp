// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      'Bebas Neue': true,
      'Farro': true,
    },
  },
})