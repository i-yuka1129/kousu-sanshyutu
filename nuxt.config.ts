// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  compatibilityDate: "2024-12-27",
  components: [
    {
      path: '~/components',
      pathPrefix: false,//呼び出す際にディレクトリ記載必要なしにしている
    },
  ],
})