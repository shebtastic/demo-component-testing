import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Helvetica;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
