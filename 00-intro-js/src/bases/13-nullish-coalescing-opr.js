// * Nullish coalescing operator - Operador de coalescencia nulo - Operador de fusión nula
// * Devuelve el operando de la derecha solo si el de la izquierda es null o undefined
// * Para cualquier otro valor (incluidos 0, '', false, NaN), devuelve el de la izquierda.
const value = null;
// const value = 0;
const a = value ?? 'Default value';
const b = value && 'Default value';
console.log(a);
console.log(b);

// * Comunmente usado aquí
const user = { address: 'Manta' };
// const user = { address: { city: 'Manta' } };
const city = user?.address?.city ?? 'Unknown';
console.log(city);
