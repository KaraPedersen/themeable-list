import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterProvider } from './state/RouterProvider';
import { CharacterProvider } from './state/CharacterProvider';


render(
  <CharacterProvider>
    <App />
  </CharacterProvider>,
  document.getElementById('root')
);
