export default defineNuxtRouteMiddleware((to, from) => {
  /* 
  
   // 在服务器端跳过中间件
  if (import.meta.server) return
  // 完全在客户端跳过中间件
  if (import.meta.client) return
  // 或仅在客户端首次加载时跳过中间件
  const nuxtApp = useNuxtApp()
  if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return

  */
  console.log("global middleware");
  return;
});
