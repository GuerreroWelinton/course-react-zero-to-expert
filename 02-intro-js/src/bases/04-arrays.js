// * Usarlo solo cuando deseo crear un arraglo vacío
// const array = new Array(100);
// array.push(1);
// console.log("array", array);

// ! No se recomienda usar el push porque esto modifica el arreglo original
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

// const array = [1, 2, 3, 4];
// const array2 = array;
// array2.push(5);

const array = [1, 2, 3, 4];
let array2 = [...array, 5];

const array3 = array2.map(function (number) {
  return number * 2;
});

console.log("array", array);
console.log("array2", array2);
console.log("array3", array3);
