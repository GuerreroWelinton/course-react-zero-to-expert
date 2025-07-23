const name = "Alexander";
const lastName = "Guerrero";

// const fullName = `${name} ${lastName}`;
// * En los templates strings funcionan los saltos de líneas con la tecla enter
const fullName = `
${name} 
${lastName}
${1 + 1}
`;

console.log(fullName);

function getGreeting(name) {
  return `Hi ${name}`;
}

console.log(`This is text: ${getGreeting(name)}`);
