// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Abril+Fatface:400' }],
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/global.scss";',
        }
      }
    },
  },
})
