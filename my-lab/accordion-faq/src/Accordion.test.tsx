import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Accordion } from './Accordion';
import { QUESTIONS } from './Accordion.constant';

vi.mock('./accordion-item/AccordionItem', () => ({
  AccordionItem: () => <div data-testid="AccordionItem"></div>,
  // * Usarlo de la manera de abajo si exporto por defecto el componente
  // default: () => <div data-testid="AccordionItem"></div>,
}));

describe('Accordion', () => {
  test('should render question title and content', () => {
    const { container } = render(<Accordion />);

    const h1 = container.querySelector('h1');

    expect(h1?.innerHTML).toContain('PREGUNTAS');
  });

  test('should have correct CSS classes', () => {
    render(<Accordion />);

    const accordionClassName = screen.getByTestId('accordion').className;
    expect(accordionClassName).toContain('container');
  });

  test('should match snapshot', () => {
    const { container } = render(<Accordion />);

    expect(container).matchSnapshot();
  });

  test('should render the correct number of AccordionItem components', () => {
    render(<Accordion />);

    const accordionItems = screen.getAllByTestId('AccordionItem');

    expect(accordionItems.length).toBe(QUESTIONS.length);
  });
});
