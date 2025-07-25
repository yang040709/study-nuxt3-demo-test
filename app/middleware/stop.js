export default defineNuxtRouteMiddleware((to, from) => {
  // return abortNavigation("失败就对了");
  return abortNavigation();
});
