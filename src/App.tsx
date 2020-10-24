import Main from './Main';
import { hydrate } from 'react-dom';
import store from './store/configureStore';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const app = (
  // @ts-ignore
  <Main store={ store } Router={ BrowserRouter } />
)

hydrate(app, document.getElementById('app'));
