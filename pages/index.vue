<script setup>
// definePageMeta({
//   layout: "default",
// });

import { ref, onMounted } from "vue";
import { useUserStore } from "~/stores/userStore";
import formatDate from "~/utils/formatDate";

const count = ref(1);

onMounted(() => {
  count.value++;
  console.log(count);
});

const handleBtnClick = () => {
  count.value++;
};

const globalCount = useCounter();

const money = useState("money");

(async () => {
  await callOnce(async () => {
    money.value = Math.round(Math.random() * 1000);
  });
})();

const work = () => {
  money.value += 100;
};

const consume = () => {
  money.value -= 50;
};

const userStore = useUserStore();

userStore.setName("张三");
userStore.setToken("123456");

const number = ref(0);

const nuxtApp = useNuxtApp();
// console.log("nuxtApp", nuxtApp);
nuxtApp.$hello();

const { name: storeName } = useUserStore();

const name = ref(storeName);
const changeName = () => {
  nuxtApp.$emitter.emit("name", name.value);
};
</script>

<template>
  <div class="container">
    <h1 class="animate__animated animate__bounce">nuxt3 2025年7月19日</h1>
    <p>{{ count }}</p>
    <p>{{ globalCount }}</p>
    <Button @click="handleBtnClick"></Button>
    <!-- <d-button>按钮</d-button> -->
    <div>
      <p>
        我当前的金钱：
        <span>{{ money }}</span>
      </p>
    </div>

    <Button @click="work">打工</Button>
    <br />
    <Button @click="consume" :hydrate-after="5000">消费</Button>
    <div>{{ userStore.name }} | {{ userStore.token }}</div>
    <BaseNumber
      :number="number"
      @add="number++"
      @reduce="number--"
    ></BaseNumber>
    <p>
      {{ formatDate(new Date()) }}
    </p>

    <div>
      <div>
        <input type="text" v-model="name" />
      </div>
      <button @click="changeName">changeName</button>
    </div>
  </div>
</template>

<style scoped></style>
