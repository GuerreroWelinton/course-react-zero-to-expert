// * Cuando se crea cualquier variable tiene un prototype que es su ADN, sus propiedades, métodos, etc.
// * Los objetos también son conocidos como diccionarios.

const person = {
  name: "Alexander",
  lastName: "Guerrero",
  age: 24,
  address: {
    city: "Manta",
    zip: 123456,
    lat: 14.245,
    lng: 10.254,
  },
};

// * Se copia la referencia al espacio de memoria de una varible
// const person2 = person;
// person2.name = "Welinton";

const person2 = { ...person };
person2.name = "Welinton";
console.log(person);
console.log(person2);
