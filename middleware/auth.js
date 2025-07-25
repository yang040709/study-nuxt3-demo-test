export default defineNuxtRouteMiddleware((to, from) => {
  const number = Math.random();
  if (number > 0.5) {
    return navigateTo("/about");
  }
  return;
});
