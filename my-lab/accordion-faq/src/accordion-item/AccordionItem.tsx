import { useState } from 'react';
import type { FAQItem } from '../Accordion.interface';
import styles from './AccordionItem.module.css';
import { DEFAULT_BG_COLOR } from '../Accordion.constant';

const AccordionItem = ({ id, question, answer, customBgColor = DEFAULT_BG_COLOR }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const className = `${styles.content} ${isOpen ? styles.open : styles.close}`;
  return (
    <>
      <div
        data-testid="accordionItem"
        className={styles.accordion}
        style={{ background: customBgColor }}
        onClick={onClick}
      >
        <h1 className={styles.question}>
          {id}. {question}
        </h1>
        <div data-testid="answer" className={className}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
