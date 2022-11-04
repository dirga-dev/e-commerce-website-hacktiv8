import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './redux/store';

import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer :{}
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);