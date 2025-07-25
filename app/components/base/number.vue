<script setup>
defineProps({
  number: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["add", "reduce"]);

function addNumber() {
  emit("add");
}

function reduceNumber() {
  emit("reduce");
}
</script>

<template>
  <div class="number-container">
    <p>当前的数字为: {{ number }}</p>
    <button @click="addNumber">+1</button>
    <button @click="reduceNumber">-1</button>
  </div>
</template>

<style scoped>
.number-container {
  border: 1px solid red;
}
</style>
