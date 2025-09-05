/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';

const mockComponent = vi.fn((_props: unknown) => <div data-testid="ItemCounter"></div>);

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockComponent(props),
}));

// vi.mock('./shopping-cart/ItemCounter', () => ({
//   ItemCounter: (props: { name: string; quantity: number }) => (
//     <div data-testid="ItemCounter" name={props.name} quantity={props.quantity}></div>
//   ),
// }));

describe('FirstStepsApp', () => {
  afterEach(() => {
    vi.clearAllMocks();
    // Limpiar los mock components después de cada prueba
  });

  test('should match snapshot', () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />);

    const itemCounterComponents = screen.getAllByTestId('ItemCounter');

    expect(itemCounterComponents.length).toBe(4);
  });

  test('should render ItemCounter with correct props', () => {
    render(<FirstStepsApp />);

    expect(mockComponent).toHaveBeenCalledTimes(4);
    expect(mockComponent).toHaveBeenCalledWith({ name: 'PlayStation 4', quantity: 2 });
    expect(mockComponent).toHaveBeenCalledWith({ name: 'XboxSeries', quantity: 3 });
    expect(mockComponent).toHaveBeenCalledWith({ name: 'Nintendo Switch', quantity: 5 });
    expect(mockComponent).toHaveBeenCalledWith({ name: 'GTA San Andrea', quantity: 7 });
  });
});

// Debo tener en cuenta que cada test que renderiza FirstStepsApp a su vez manda renderizar a ItemCounter
// la cantidad de veces del array itemsInCart(4)
