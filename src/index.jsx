import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLoader from './components/app/AppLoader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppLoader/>
  </React.StrictMode>
);