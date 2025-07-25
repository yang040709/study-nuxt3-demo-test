// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  experimental: {
    componentIslands: true,
  },
  modules: ["@pinia/nuxt", "@element-plus/nuxt", "@nuxt/image"],
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBase: "/api",
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
    // head: {
    //   title: "Nuxt3",
    //   meta: [
    //     {
    //       name: "description",
    //       content: "Nuxt3",
    //     },
    //   ],
    // },
  },
  nitro: {
    devProxy: {
      "/api/server1": {
        target: "http://localhost:4399",
        autoRewrite: true,
        changeOrigin: true,
        prependPath: true,
      },
      // 改写路径
    },
  },
});