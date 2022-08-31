import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Context} from './context/Context';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Context.Provider value={{
            user: new UserStore(),
            device: new DeviceStore()
        }}>
    <App />
    </Context.Provider>
  </React.StrictMode>
);

