import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './components/App';

import './scss/main.scss';

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app'),
);
