import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import AccordionItem from './AccordionItem';
import type { FAQItem } from '../Accordion.interface';

const faqItem: FAQItem = {
  id: 123,
  question: 'Esta es la pregunta número 1',
  answer: 'Esta es la respuesta a la pregunta número 1',
  customBgColor: 'rgb(172, 199, 84)',
};

describe('AccordionItem', () => {
  test('should render with default values', () => {
    render(<AccordionItem {...faqItem} />);

    expect(screen.getByText(faqItem.answer)).toBeDefined();
  });

  test('should match the snapshot', () => {
    const { container } = render(<AccordionItem {...faqItem} />);

    expect(container).toMatchSnapshot();
  });

  test('should render with custom background color', () => {
    render(<AccordionItem {...faqItem} />);

    const accordionItem = screen.getByTestId('accordionItem');
    const accordionItemBgColor = accordionItem.style.backgroundColor;

    expect(accordionItemBgColor).toBe(faqItem.customBgColor);
  });
});
