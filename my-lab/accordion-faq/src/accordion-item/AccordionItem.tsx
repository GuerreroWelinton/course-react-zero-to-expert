import { useState } from 'react';
import type { FAQItem } from '../Accordion.interface';
import styles from './AccordionItem.module.css';

const AccordionItem = ({ id, answer, question, customBgColor }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const className = `${styles.content} ${isOpen ? styles.open : styles.close}`;
  return (
    <>
      <div className={styles.accordion} style={{ backgroundColor: customBgColor }} onClick={onClick}>
        <h1 className={styles.question}>
          {id}. {question}
        </h1>
        <div className={className}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
