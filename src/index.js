import React from 'react';
import ReactDOM from 'react-dom';
import MoneySaver from './MoneySaver';
import reportWebVitals from './reportWebVitals';
import './main.css';

ReactDOM.render(
  <React.StrictMode>
    <MoneySaver />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
