<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";

definePageMeta({
  layout: "custom",
});

const globalCount = useCounter();
const nuxtApp = useNuxtApp();

console.log(nuxtApp, "<===nuxtApp");

const handleClick = () => {
  globalCount.value++;
};

const getList = async () => {
  const res = await $fetch("/api/server1/list", {
    method: "get",
  });
  console.log(res, "<===list");
};

const getHelloWorld = async () => {
  // useLazyAsyncData
  // const { data, error } = await useLazyAsyncData("helloWorld", async () => {
  //   return await $fetch("/api/helloWorld", {
  //     method: "get",
  //   });
  // });
};

const { data, error } = await useAsyncData("user", async () => {
  console.log("getUser");

  return await $fetch("/api/user", {
    method: "get",
  });
});

console.log(data);
</script>

<template>
  <div class="container">
    <nuxt-link to="/">前往home</nuxt-link>
    <div class="container">about</div>
    <div>
      {{ globalCount }}
    </div>
    <button @click="handleClick">+1</button>
    <div class="cly-container">
      <img src="~/assets/xinyi1.png" alt="" class="img" />
    </div>
    <div>
      <button @click="getList">getList</button>
    </div>
    <div>
      <button @click="getHelloWorld">getHelloWorld</button>
    </div>
    <div>
      useLazyAsyncData :
      <span>{{ data }}</span>
    </div>

    <div class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>

    <div class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </div>

    <div class="mb-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </div>

    <div>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </div>
    <nuxt-img
      class="img"
      src="https://tse2.mm.bing.net/th/id/OIP._z0yDSCo1bm2hQDQZPKZPwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    ></nuxt-img>
  </div>
</template>

<style scoped>
.img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
</style>
