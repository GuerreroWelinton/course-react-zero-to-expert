import type { FAQItem } from './Accordion.interface';

export const questions: FAQItem[] = [
  {
    id: 1,
    question: '¿Qué es React?',
    answer:
      'React es una biblioteca de JavaScript para construir interfaces de usuario. Te permite crear componentes reutilizables que gestionan su propio estado.',
  },
  {
    id: 2,
    question: '¿Qué es el JSX?',
    answer:
      'JSX es una extensión de la sintaxis de JavaScript que se parece a HTML. Permite escribir la estructura de tus componentes de una manera más declarativa y familiar.',
  },
  {
    id: 3,
    question: '¿Qué hace el hook `useState`?',
    answer:
      'El hook `useState` permite a los componentes funcionales tener su propio estado. Devuelve un valor de estado y una función para actualizarlo, provocando un nuevo renderizado del componente.',
    customBgColor: '#acc754',
  },
];
