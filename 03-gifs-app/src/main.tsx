import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GifsApp } from './GifsApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp />
    {/* <MyCounterApp /> */}
  </StrictMode>
);

// NOTE: Se recomienda crear un componente con el nombre de la aplicación
// para que desde ese componente se configuren las cosas globales y no en el main
