import { render, screen } from '@testing-library/react';
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
});
