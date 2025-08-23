import type { Question } from './Accordion.interface';

export const questions: Question[] = [
  {
    id: 1,
    title: '¿Qué es React?',
    content:
      'React es una biblioteca de JavaScript para construir interfaces de usuario. Te permite crear componentes reutilizables que gestionan su propio estado.',
  },
  {
    id: 2,
    title: '¿Qué es el JSX?',
    content:
      'JSX es una extensión de la sintaxis de JavaScript que se parece a HTML. Permite escribir la estructura de tus componentes de una manera más declarativa y familiar.',
  },
  {
    id: 3,
    title: '¿Qué hace el hook `useState`?',
    content:
      'El hook `useState` permite a los componentes funcionales tener su propio estado. Devuelve un valor de estado y una función para actualizarlo, provocando un nuevo renderizado del componente.',
  },
];
