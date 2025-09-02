import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: () => <div data-testid="ItemCounter"></div>,
}));

describe('FirstStepsApp', () => {
  test('should match snapshot', () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />);

    const itemCounterComponents = screen.getAllByTestId('ItemCounter');

    expect(itemCounterComponents.length).toBe(4);
  });
});
