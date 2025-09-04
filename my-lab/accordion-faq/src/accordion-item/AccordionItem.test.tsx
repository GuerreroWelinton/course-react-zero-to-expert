import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { DEFAULT_BG_COLOR, TEST_QUESTION } from '../Accordion.constant';
import AccordionItem from './AccordionItem';

describe('AccordionItem', () => {
  test('should match the snapshot', () => {
    const { container } = render(<AccordionItem {...TEST_QUESTION} />);

    expect(container).toMatchSnapshot();
  });

  test('should render with default background color', () => {
    render(<AccordionItem {...TEST_QUESTION} />);

    const accordionItem = screen.getByTestId('accordionItem');
    const accordionItemBg = accordionItem.style.background;

    expect(accordionItemBg).toBe(DEFAULT_BG_COLOR);
  });

  test('should render with custom background color', () => {
    const customBgColor = 'rgb(172, 199, 84)';

    render(<AccordionItem {...TEST_QUESTION} customBgColor={customBgColor} />);

    const accordionItem = screen.getByTestId('accordionItem');
    const accordionItemBg = accordionItem.style.background;

    expect(accordionItemBg).toBe(customBgColor);
  });

  test('should change the "close" class to "open" when container element is pressed', () => {
    render(<AccordionItem {...TEST_QUESTION} />);

    const accordionItem = screen.getByTestId('accordionItem');
    fireEvent.click(accordionItem);

    const answer = screen.getByTestId('answer');
    const accordionItemClassName = answer.className;

    expect(accordionItemClassName).toContain('open');
  });
});
