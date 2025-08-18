/* eslint-disable react-hooks/rules-of-hooks */

// Desestructuración
// Asignación desestructurante

const user = {
  name: "Welinton",
  age: 24,
  key: "MochaSplit",
  range: "Soldier",
};

// const { name: name2, key, age } = user;

// console.log(name2, age, key);

const useContext = ({ key: username, range = "Captain" }) => {
  return {
    username,
    role: range,
    address: {
      lat: 16.547,
      lng: 20.548,
    },
  };
};

// const { username, role, address } = useContext(user);
// const { lat, lng } = address;

const {
  username,
  role,
  address: { lat, lng },
} = useContext(user);

console.log(username, role, lat, lng);
