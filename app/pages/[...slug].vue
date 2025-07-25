<script setup>
const route = useRoute();
const nuxtApp = useNuxtApp();
console.log(route, "<==route");
console.log(nuxtApp, "<==nuxtApp");
</script>

<template>
  <div class="container">
    <div>
      <h1>这是[...slug]页面</h1>
    </div>
  </div>
</template>

<style scoped></style>
