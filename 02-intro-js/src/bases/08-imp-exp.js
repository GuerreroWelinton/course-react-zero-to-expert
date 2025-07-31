// import { heroes } from '../data/heroes';
// import { heroes, owners } from '../data/heroes';
import heroes, { owners } from '../data/heroes';

console.log(owners);

const getHeroeById = (idValue) => heroes.find(({ id }) => id === idValue);
console.log(getHeroeById(2));

const getHeroeByOwner = (ownerValue) => heroes.filter(({ owner }) => owner === ownerValue);
console.table(getHeroeByOwner('Marvel'));
