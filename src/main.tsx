import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'normalize.css';
import './shared/App/Styles/common.css';
import { MuiThemeProvider } from './shared/App/MuiThemeProvider/MuiThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </StrictMode>,
);
