export const usePerson = () => {
  const { name, setName } = useName();
  const { age, setAge } = useAge();
  return { name, age, setName, setAge };
};
