import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default class Button extends Component{

 colorChange(){
  const btn = document.getElementById('btn');
  let counter = 0;
  const colors = ['#17b6a0', '#e7c905'];
  btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = colors[counter];
    counter = counter >= colors.length - 1 ? 0 : counter + 1;
  });
  
  }
}