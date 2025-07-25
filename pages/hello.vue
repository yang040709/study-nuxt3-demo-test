<script setup>
const { data } = await useFetch("/api/hello");
const { data: hahahaData } = await useFetch("/hahaha");

const appConfig = useAppConfig();

updateAppConfig({
  app: {
    name: "my-nuxt3-app",
  },
});

console.log("app config", appConfig);

const runtimeConfig = useRuntimeConfig();

console.log("runtimeConfig", runtimeConfig);

// console.log(import.meta);

const vRedColor = {
  beforeMount(el, binding) {
    el.classList.add("active");
    console.log(el, binding);
  },
  // mounted(el, binding) {
  //   el.classList.add("active");
  //   console.log(el, binding);
  // },
  getSSRProps(binding) {
    console.log("binding", binding);

    return {
      class: "active",
    };
  },
};

onErrorCaptured((err) => {
  console.log("error", err);
});

const testError = () => {
  throw new Error("抛出一个错误");
};
</script>

<template>
  <div class="container">
    <div>
      {{ data }}
    </div>
    <div v-red-color>
      {{ hahahaData }}
    </div>
    <button @click="testError">throw error</button>

    <client-only fallback-tag="div" fallback="评论加载中...">
      <div>这句话只能在客户端渲染。。。。。</div>
    </client-only>

    <client-only fallback-tag="div">
      <div>这句话只能在客户端渲染。。。。。</div>
      <template #fallback>
        <p>加载中，gogogo</p>
      </template>
    </client-only>
    <p>test</p>
    <!-- <nuxt-island name="blog"></nuxt-island> -->
    <blog></blog>
  </div>
</template>

<style scoped>
.active {
  color: red;
}
</style>
