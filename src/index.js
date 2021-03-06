import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './app';
import reportWebVitals from './reportWebVitals';
import './style/main.css'
ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
  ,
  document.getElementById('root')
);

reportWebVitals();
