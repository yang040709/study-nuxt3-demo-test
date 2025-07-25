<script setup>
const emit = defineEmits(["click"]);

const handleClick = () => {
  console.log("button click");
  emit("click");
};
</script>

<template>
  <button @click="handleClick">
    <slot> 按钮 </slot>
  </button>
</template>

<style scoped>
button {
  background-color: red;
  width: 100px;
  height: 50px;
  outline: none;
  border: none;
}
</style>
