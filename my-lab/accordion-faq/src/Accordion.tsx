import { AccordionItem } from './accordion-item/AccordionItem';
import { QUESTIONS } from './Accordion.constant';

import styles from './Accordion.module.css';

export const Accordion = () => {
  return (
    <>
      <div data-testid="accordion" className={styles.container}>
        <h1>PREGUNTAS FRECUENTES</h1>
        {QUESTIONS.map((item) => (
          <AccordionItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
