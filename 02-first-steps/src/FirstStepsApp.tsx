// Functional Component

import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
  id: number;
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { id: 1, productName: 'PlayStation 4', quantity: 2 },
  { id: 2, productName: 'XboxSeries', quantity: 3 },
  { id: 3, productName: 'Nintendo Switch', quantity: 5 },
  { id: 4, productName: 'GTA San Andrea', quantity: 7 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Shopping Cart</h1>

      {itemsInCart.map(({ id, productName, quantity }) => (
        <ItemCounter key={id} name={productName} quantity={quantity} />
      ))}
    </>
  );
}

// No usar el índece como key en arrays, es mala práctica
// La key debe ser un valor único
