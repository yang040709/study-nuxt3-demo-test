<script setup>
// const props = defineProps({
//   item: Object,
//   default: () => ({
//     title: "你好",
//     content: "我是内容",
//   }),
// });

// useAsyncData 会阻塞路由导航
// useLazyAsyncData 不会阻塞路由导航

const { data: todos, ...all } = await useLazyAsyncData("get-item", () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { title: "你好", content: "我是内容" },
        { title: "你好", content: "我是内容" },
        { title: "你好", content: "我是内容" },
        { title: "你好", content: "我是内容" },
      ]);
    }, 1000);
  });
});

console.log(todos, all);
</script>

<template>
  <div class="container">
    <div class="item" v-for="item in todos" :key="item.title">
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<style scoped></style>
