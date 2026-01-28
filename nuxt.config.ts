// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // 引入全局样式
  css: ['~/assets/css/main.css'],
  
  // SSR 配置
  ssr: true,
  
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
});
