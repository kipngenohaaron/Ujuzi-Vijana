// import React from 'react';
// import ReactDOM from 'react-dom';
// import './assets/main.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
