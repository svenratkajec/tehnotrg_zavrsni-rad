// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    sqlConfig: {
      host: 'localhost',
      user: 'zavrsni_ratkajec',
      password: 'zavrsni_ratkajec@ess!!',
      database: 'zavrsni_ratkajec',
    },
    managerPass: "chH8u4XS"
  },
  modules: ['nuxt-icon', '@vee-validate/nuxt', 'nuxt-swiper'],
});