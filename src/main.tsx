import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './gui/App';
import './gui/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
