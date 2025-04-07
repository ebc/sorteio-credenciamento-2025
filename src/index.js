import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter basename="/sorteiro-credenciamento-2025">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
