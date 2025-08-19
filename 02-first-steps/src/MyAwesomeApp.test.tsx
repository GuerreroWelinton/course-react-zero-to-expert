import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp />);
    // screen.debug();

    const h1 = container.querySelector('h1');
    const h3 = container.querySelector('h3');

    // expect(h1?.innerHTML).toBe('Welinton');
    // expect(h1?.innerHTML).toBe(' Welinton ');
    // expect(h3?.innerHTML).toContain('gue');

    expect(h1?.innerHTML).toContain('Welinton');
    expect(h3?.innerHTML).toContain('rrero');
  });

  test('should render firstName and lastName - screen ', () => {
    render(<MyAwesomeApp />);
    screen.debug();

    // const h1 = screen.getByRole('heading', {
    //   level: 1,
    // });

    const h1 = screen.getByTestId('first-name-title');
    expect(h1.innerHTML).toContain('Welinton');
  });
});

// Se recomienda solo usar { container } con un render inicial y para estados sin manipulaciones sin eventos
// Se debe actualizar la configuración de vite (vite.config.ts) para poder usar el render
// El screen.debug() solo funciona si hago uso del render(<MyComponent/>)
// Se pueden poner tantos expect dentro del test como se necesiten
// El screen.debug() me permite ver los datos actualizados si surgió un cambio en el componente
// No se recomienda hacerlo con screen.getByTestId('id')
