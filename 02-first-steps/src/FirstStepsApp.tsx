// Functional Component

import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
  id: number;
  itemName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { id: 1, itemName: 'PlayStation 4', quantity: 2 },
  { id: 2, itemName: 'XboxSeries', quantity: 3 },
  { id: 3, itemName: 'Nintendo Switch', quantity: 5 },
  { id: 4, itemName: 'GTA San Andrea', quantity: 7 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Shopping Cart</h1>

      {itemsInCart.map(({ id, itemName, quantity }) => (
        <ItemCounter key={id} productName={itemName} quantity={quantity} />
      ))}
    </>
  );
}

// No usar el índece como key en arrays, es mala práctica
// La key debe ser un valor único
