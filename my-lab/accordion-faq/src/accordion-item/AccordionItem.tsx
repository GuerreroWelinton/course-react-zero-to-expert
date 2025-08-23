import { useState } from 'react';
import type { Question } from '../Accordion.interface';
import styles from './AccordionItem.module.css';

const AccordionItem = ({ id, content, title }: Question) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const className = `${styles.content} ${isOpen ? styles.open : styles.close}`;
  return (
    <>
      <div className={styles.accordion} onClick={onClick}>
        <h1 className={styles.question}>
          {id}. {title}
        </h1>
        <div className={className}>
          <p className={styles.answer}>{content}</p>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
