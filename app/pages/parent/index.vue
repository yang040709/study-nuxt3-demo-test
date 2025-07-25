<script setup>
definePageMeta({
  middleware: [
    "auth",
    (to, from) => {
      console.log("匿名中间件");
      return true;
    },
    (to, from) => {
      console.log(to.meta.pageTransition, "<====pageTransition");
    },
  ],
  validate: (route) => {
    // return false;
    console.log(route, "<==parent route validate");
    return true;
  },
  pageTransition: false,
  layoutTransition: false,
});
const classObj = ref({ "bg-red": true });
const txt = ref("red");
</script>

<template>
  <div class="container">
    <h1 :class="classObj">
      使用中间件，和匿名中间件、validate来对路由进行鉴权
    </h1>
  </div>
</template>

<style scoped lang="less">
.bg-red {
  background: v-bind(txt);
}
</style>
