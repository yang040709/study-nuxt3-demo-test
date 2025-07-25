import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const name = ref("");
  const token = ref("");
  const setName = (newName: string) => {
    // 属性“value”在类型“string”上不存在。你是否指的是“valueOf”?t
    name.value = newName;
  };
  const setToken = (newToken: string) => {
    token.value = newToken;
  };
  return {
    name,
    token,
    setName,
    setToken,
  };
});
