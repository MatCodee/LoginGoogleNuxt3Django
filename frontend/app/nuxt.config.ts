// https://nuxt.com/docs/api/configuration/nuxt-config
import GoogleProvider from "next-auth/providers/google";


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
    modules: ['@sidebase/nuxt-auth'],
    auth: {
      provider: {
        provider: {
          type: 'authjs'
        }
      }
    },
})
