export default function () {
  const name = ref("");
  const setName = (newName) => {
    name.value = newName;
  };
  return { name, setName };
}
