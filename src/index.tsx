import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppTransaction } from './AppTransaction';
import { Login } from './components/Login';
import './index.css';
/* import { AppRouter } from './routers/AppRouter'; */


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Login/>
   {/*  <AppRouter/> */}
  </React.StrictMode>
);


