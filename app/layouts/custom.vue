<script setup></script>

<template>
  <div class="container">
    <h1>custom页面</h1>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */
</style>
