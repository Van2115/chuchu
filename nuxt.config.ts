// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules:[
    '@vueuse/nuxt',
  ],
  nitro:{
    routeRules:{
      "/":{  //api
        proxy:"http://localhost:8080", //api
      },
    },
  },
  typescript: {
    shim: false,
  },
  css: [
    "~/assets/scss/main.scss",
  ],
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
  },
})
