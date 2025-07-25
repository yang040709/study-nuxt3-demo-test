<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route, "<===");
const throwError = () => {
  // throw new Error("抛出一个错误");
  // try {
  //   throw createError({
  //     statusCode: 404,
  //     message: "页面不存在",
  //     fatal: true,
  //   });
  // } catch (error) {
  //   console.log(error, "<==!!");
  // }
  try {
    throw showError({
      statusCode: 404,
      message: "页面不存在",
      fatal: true,
    });
  } catch (error) {
    console.log(error, "<==!!");
  }
};
</script>

<template>
  <div class="container">
    <h1>{{ $route.params.group }}</h1>
    <LazyBaseItem></LazyBaseItem>
    <button @click="throwError">点击触发错误</button>
  </div>
</template>

<style scoped></style>
