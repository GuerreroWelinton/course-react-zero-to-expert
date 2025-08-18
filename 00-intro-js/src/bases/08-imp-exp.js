// import { heroes } from '../data/heroes';
// import { heroes, owners } from '../data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log(owners);

export const getHeroeById = (idValue) => heroes.find(({ id }) => id === idValue);
// console.log(getHeroeById(2));

export const getHeroeByOwner = (ownerValue) => heroes.filter(({ owner }) => owner === ownerValue);
// console.table(getHeroeByOwner('Marvel'));
