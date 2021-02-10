import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parent from './ex1/Parent'



ReactDOM.render(
  <React.StrictMode>
    
    <Parent firstName="Jacob"/>
    
  </React.StrictMode>,
  document.getElementById('root')
);
