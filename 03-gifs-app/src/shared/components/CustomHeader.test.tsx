import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { CustomHeader } from '@/shared/components/CustomHeader';

describe('CustomHeader', () => {
  const title = 'Test title';

  test('should render the title correctly', () => {
    render(<CustomHeader title={title} />);

    expect(screen.getByText(title)).toBeDefined();
  });

  test('should render the description when provided', () => {
    const description = 'Test description';
    render(<CustomHeader title={title} description={description} />);

    expect(screen.getByText(description)).not.toBeNull();
    expect(screen.getByRole('paragraph')).toBeDefined();
    expect(screen.getByRole('paragraph').innerHTML).toBe(description);
  });

  test('should render the description when not provided', () => {
    const { container } = render(<CustomHeader title={title} />);

    const divElement = container.querySelector('.content-center');

    const h1 = divElement?.querySelector('h1');
    expect(h1?.innerHTML).toBe(title);

    const p = divElement?.querySelector('p');
    expect(p?.innerHTML).toBeUndefined();
    expect(p).toBeNull();
  });
});

// Cuando se usa el screen el elemento debe existir por eso no se puede evaluar la no existencia de un elemento con screen
// Cuando los elementos cambian desde su renderizado inicial usar screen y cuando no se puede usar const {container} = render(<Component/>)
