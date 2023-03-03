import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  texto={{chamada00: 'Curso de React',chamada01: 'Danki.Code'}}/>
  </React.StrictMode>
);
