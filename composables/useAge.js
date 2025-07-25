export default function () {
  const age = ref(18);
  const setAge = (newAge) => {
    age.value = newAge;
  };
  return { age, setAge };
}
