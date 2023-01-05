// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ['~/assets/scss/main.scss'],
  modules: ['@pinia/nuxt'],
  app: { pageTransition: { name: 'page', mode: 'out-in' } },
})
