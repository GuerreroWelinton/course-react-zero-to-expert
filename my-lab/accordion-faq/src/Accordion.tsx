import AccordionItem from './accordion-item/AccordionItem';
import { questions } from './Accordion.constant';

import styles from './Accordion.module.css';

const Accordion = () => {
  return (
    <div data-testid="accordion" className={styles.container}>
      <h1>PREGUNTAS FRECUENTES</h1>
      {questions.map(({ id, content, title }) => (
        <AccordionItem key={id} id={id} content={content} title={title} />
      ))}
    </div>
  );
};

export default Accordion;
