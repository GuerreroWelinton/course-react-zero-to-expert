console.log("Hola mundo ecua");

const name = "Alexander";
const lastName = "Guerrero";
let diceValue = 5;
diceValue = 4;

console.log(name, lastName, diceValue);

const condition = 2 % 2;
if (condition === 0) {
  //* Aquí la varibale let solo cambia dentro de este scope
  let diceValue = 6;
  console.log(diceValue);
}

//* Una vez fuera el let tendra el valor de su scope
console.log(diceValue);
