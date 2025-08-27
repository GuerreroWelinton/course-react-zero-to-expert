import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ItemCounter } from './ItemCounter';

describe('ItemCounter', () => {
  test('should render with default values', () => {
    const productName = 'Test item';

    render(<ItemCounter productName={productName} />);

    // expect(screen.getByText('Test item')).toBeDefined();
    expect(screen.getByText(productName)).not.toBeNull();
  });

  test('should render with custom quantity', () => {
    const productName: string = 'Test item';
    const quantity: number = 2;

    render(<ItemCounter productName={productName} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test('should increase count when +1 button is pressed', () => {
    const productName: string = 'Play Station 5';

    render(<ItemCounter productName={productName} />);

    const [buttonAdd] = screen.getAllByRole('button');

    fireEvent.click(buttonAdd);

    expect(screen.getByText('2')).toBeDefined();
  });

  test('should decrease count when -1 button is pressed', () => {
    const productName: string = 'Xbox Series';
    const quantity: number = 5;

    render(<ItemCounter productName={productName} quantity={quantity} />);

    const [, buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);

    expect(screen.getByText('4')).toBeDefined();
  });

  test('should not decrease count when -1 button is pressed and quantity is 0', () => {
    const productName: string = 'Xbox Series';
    const quantity: number = 0;

    render(<ItemCounter productName={productName} quantity={quantity} />);

    const [, buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);

    expect(screen.getByText('0')).toBeDefined();
  });
});

// Cuando se usa fireEvent va a ejecutar las funciones que estén vinculadas a mis eventos
// por ejemplo en el componente ItemCounter está ejecutando toda la lógica de handleAdd
