// export function MyAwesomeApp() {
//   return (
//     <>
//       <h1>Welinton</h1>
//       <h3>Guerrero</h3>
//     </>
//   );
// }

import type { CSSProperties } from 'react';

const firstName = 'Welinton';
const lastName = 'Guerrero';

const favoriteGames = ['Fornite', 'Smite', 'Minecraft', 'Halo'];
const isActive = false;

const address = {
  zipCode: 'ABC',
  country: 'Ecuador',
};

const myStyles: CSSProperties = { backgroundColor: '#0c5a02ff', borderRadius: '8px', padding: '10px' };

export const MyAwesomeApp = () => {
  return (
    <div data-testid="div-app">
      <h1 data-testid="first-name-title"> {firstName} </h1>
      <h3> {lastName} </h3>

      <p>{2 + 2}</p>
      <p className="mi-clase-favorita"> {favoriteGames.join(', ')} </p>

      <h1> {isActive ? 'Active' : 'Inactive'} </h1>

      <p style={myStyles}> {JSON.stringify(address)} </p>
    </div>
  );
};

// Los valores booleanos (true, false), null y undefined no producen ninguna salida visual en React. Esto es útil para el renderizado condicional.
// No se pueden imprimir directamente los objetos, pero se puede hacer con un JSON.stringify(object)
