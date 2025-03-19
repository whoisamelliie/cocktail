import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Cocktail from './Cocktail'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Cocktail />
  </React.StrictMode>
);
