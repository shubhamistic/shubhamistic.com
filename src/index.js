import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { CustomScrollbar } from './components'
import { MainProvider } from './providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainProvider>
      <CustomScrollbar>
        <App />
      </CustomScrollbar>
    </MainProvider>
  </React.StrictMode>
);
