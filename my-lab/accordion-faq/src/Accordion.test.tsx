import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Accordion from './Accordion';

describe('Accordion', () => {
  test('should render question title and content', () => {
    const { container } = render(<Accordion />);

    const h1 = container.querySelector('h1');

    // expect(h1?.innerHTML).toBe('PREGUNTAS');
    expect(h1?.innerHTML).toContain('PREGUNTAS');
  });

  test('should have correct CSS classes', () => {
    render(<Accordion />);
    // screen.debug();

    const accordionClassName = screen.getByTestId('accordion').className;
    expect(accordionClassName).toContain('container');
  });

  test('should match snapshot', () => {
    const { container } = render(<Accordion />);

    expect(container).matchSnapshot();
  });
});
