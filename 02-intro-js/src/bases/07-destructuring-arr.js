/* eslint-disable react-hooks/rules-of-hooks */

const characters = ["Goku", "Vegeta", "Trunks"];
const [, , cha3] = characters;
console.log(cha3);

const getArray = () => {
  return ["ABC", 123];
};
const arr = getArray();
const [letters, numbers] = arr;
console.log(letters, numbers);

const useState = (value) => {
  return [
    value,
    () => {
      console.log(`Hi ${value}!`);
    },
  ];
};
const [value, setValue] = useState("Goku");
console.log(value);
setValue();
