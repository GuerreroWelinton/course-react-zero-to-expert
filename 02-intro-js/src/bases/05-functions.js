// ! No hacer funciones así porque las puedo sobreescribir
// function greet(name) {
// return `Hi ${name}!`;
// }
// greet = 20;

// * Si se usa function se recomienda asignarlas a una constante para evitar inconvenientes de sobreescritura
// const greet = function (name) {
//   return `Hi ${name}!`;
// };

// const greet2 = (name) => {
//   return `Hi ${name}!`;
// };

// const greet3 = (name) => `Hi ${name}!`;

// const greet4 = () => `Hello World!`;

// console.log(greet("Welinton"));
// console.log(greet2("Alexander"));
// console.log(greet3("MochaSplit"));
// console.log(greet4());

// const getUser = () => ({ uid: "ABC123", username: "AlexCse13" });
// const user = getUser();
// console.log(user)

// TODO:
// 1. Transformen a una función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

// function getActiveUser(username) {
//   return {
//     uid: "ABC567",
//     username,
//   };
// }
// const userActive = getActiveUser("MochaSplit");
// console.log(userActive);

const getActiveUser = (username) => ({ uid: "ABC123", username });
const activeUser = getActiveUser("MochaSplit");
console.log(activeUser);
