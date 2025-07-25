<script setup>
const nuxtApp = useNuxtApp();
const { name, setName } = useUserStore();

onMounted(() => {
  console.log(nuxtApp, nuxtApp.$emitter, "<==nuxtApp");
  nuxtApp.$emitter.on("name", (str) => {
    setName(str);
  });
});
onBeforeMount(() => {
  nuxtApp.$emitter.off("name");
});
</script>

<template>
  <div class="container">
    <h2>{{ $route.params.id }}</h2>
    <h4>{{ name }}</h4>
  </div>
</template>

<style scoped></style>
