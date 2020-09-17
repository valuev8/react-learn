import { Main } from './Main';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import React from 'react';

ReactDOM.render(
  <Provider store={store}>
   <Main />
  </Provider>,
  document.getElementById("app")
);
