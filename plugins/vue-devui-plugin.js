import { defineNuxtPlugin } from "#app";
// import { Button } from "vue-devui";

export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp);
  console.log("hello");
  return {
    provide: {
      hello: () => {
        console.log("HelloWorld");
      },
    },
  };
  // nuxtApp.vueApp.use(Button);
});
