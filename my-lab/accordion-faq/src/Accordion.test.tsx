import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { Accordion } from './Accordion';
import { QUESTIONS } from './Accordion.constant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockComponent = vi.fn((_props: unknown) => <div data-testid="AccordionItem"></div>);

vi.mock('./accordion-item/AccordionItem', () => ({
  AccordionItem: (props: unknown) => mockComponent(props),
  // * Usarlo de la manera de abajo si exporto por defecto el componente
  // default: () => <div data-testid="AccordionItem"></div>,
}));

describe('Accordion', () => {
  afterEach(() => vi.clearAllMocks());

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

  test('should render AccordionItem with the correct props', () => {
    render(<Accordion />);

    expect(mockComponent).toHaveBeenCalledTimes(QUESTIONS.length);

    QUESTIONS.forEach((item) => expect(mockComponent).toHaveBeenCalledWith(item));
  });
});
