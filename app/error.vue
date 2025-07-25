<script setup>
const props = defineProps({
  error: Object,
});

const throwError = () => {
  throw new Error("抛出一个错误");
};
</script>

<template>
  <div class="container">
    <p>出错了~~~~~~~~~</p>
    <p>请联系管理员</p>
    <p>{{ error.statusCode }}</p>
    <p>{{ error.message }}</p>
    <p><button @click="throwError">点击触发错误</button></p>
  </div>
</template>

<style scoped></style>
