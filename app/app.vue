<script setup>
import "~/assets/reset.css";
import "~/assets/global.less";
import "animate.css";
import "element-plus/dist/index.css";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt3` : "Nuxt3";
  },
  script: [
    {
      src: "https://third-party-script.com",
      // 有效选项为: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "bodyClose",
    },
  ],
});

/* 
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} %separator %siteName` : '%siteName';
  },
  templateParams: {
    siteName: 'Site Title',
    separator: '-'
  }
})
*/
</script>
<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <NuxtLoadingIndicator
      color="red"
      :duration="200"
      :height="8"
    ></NuxtLoadingIndicator>
    <NuxtLayout>
      <!-- <NuxtPage /> 是路由入口 -->
      <p>全局页面，全局布局过渡</p>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate(30deg);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
