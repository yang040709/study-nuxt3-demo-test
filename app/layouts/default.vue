<script setup>
// import { NuxtLayout } from '#components';
</script>

<template>
  <div class="container">
    <header>
      <nuxt-link to="/">home</nuxt-link>
      <nuxt-link to="/about">about</nuxt-link>
      <nuxt-link to="/user-admin">admin</nuxt-link>
      <nuxt-link to="/user-admin/12">admin id:12</nuxt-link>
      <nuxt-link to="/parent">parent</nuxt-link>
      <nuxt-link to="/parent/child">child</nuxt-link>
      <nuxt-link to="/testError">test error</nuxt-link>
      <nuxt-link to="/Hello">Hello</nuxt-link>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <ul>
        <li v-for="i in 5" :key="i">这是页尾</li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 150px 1fr 150px;
}

header {
  height: 150px;
  display: flex;
  width: 100%;
  gap: 30px;
  background: rgb(165, 234, 234);
  align-items: center;
}

header a {
  height: 50%;
  display: flex;
  color: rgb(139, 252, 235);
  font-size: 20px;
  background: rgb(6, 213, 213);
  text-decoration: none;
  padding: 20px;
}
.router-link-exact-active {
  background: rgb(0, 4, 4);
}

footer {
  height: 150px;
  background: rgb(119, 164, 119);
}

ul {
  list-style: none;
}
</style>
