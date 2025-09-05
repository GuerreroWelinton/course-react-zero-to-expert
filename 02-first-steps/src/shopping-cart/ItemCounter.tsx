import { useState } from 'react';

// import './ItemCounter.css';
import styles from './ItemCounter.module.css';

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState<number>(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <section className={styles.itemRow}>
      <span className={styles['item-text']} style={{ color: count > 0 ? 'black' : 'red' }}>
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};

// No usar las funciones dispachers (set) del useState directamente el componente
// ya que, esta función provoca un re-render del componente y genera un bucle infinito

// Orden de las importaciones
// React
// Librerias de terceros
// Archivos personalizados
// Css

// Los css module debe llevar el .module
