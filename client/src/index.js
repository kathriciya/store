import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Context } from './context/Context';
import './index.css';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
);
