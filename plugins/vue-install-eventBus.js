// import VueGtag from 'vue-gtag'
import mitt from "mitt";

export default defineNuxtPlugin((nuxtApp) => {
  // const vueApp=nuxtApp.vueApp;
  // vueApp.use(VueGtag,{
  //   config:{
  //     id:'G-YZYZYZYZYZ'
  //   }
  // })
  return {
    provide: {
      emitter: mitt(),
    },
  };
});
