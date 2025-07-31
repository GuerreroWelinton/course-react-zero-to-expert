import { getHeroeById } from './bases/08-imp-exp';

// * Las promesas se ejecutan en la pila de trabajo de JS
// * Los resultados de las promesas se ejecutan una vez que termina todo lo síncrono

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(7);
//     if (heroe) {
//       resolve(heroe);
//     } else {
//       reject('Heroe not found');
//     }
//   }, 2000);
// });

// promise
//   .then((heroe) => {
//     console.log('heroe', heroe);
//   })
//   .catch((err) => {
//     console.warn(err);
//   });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('Heroe not found');
      }
    }, 2000);
  });
};

// * Podemos mandar la referencia de una función en el then o en el catch para que tome
// * los parámetros declarados en estás y los envie como argumentos a la referencia de la función
getHeroeByIdAsync(2).then(console.log).catch(console.warn);
