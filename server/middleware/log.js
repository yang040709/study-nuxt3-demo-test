export default defineEventHandler((e) => {
  console.log("新的请求", getRequestURL(e));
  console.log("context", e.context);
});
