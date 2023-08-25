// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    buildModules: [
      '@nuxtjs/axios'
    ],
    modules: [
      'nuxt-vue3-google-signin'
    ],
    googleSignIn: {
      clientId: "73830782968-obklojqj3oh6fnvuma60eqednganv1hl.apps.googleusercontent.com",
      //clientId: process.env.cliendID,
    }
})
