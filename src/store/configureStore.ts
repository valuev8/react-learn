import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './rootReducer';
import callApi from '../api/callApi';

// @ts-ignore
let devTools = (f) => f;

// @ts-ignore
if (process.browser &&
  process.env.NODE_ENV !== 'production' &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__) {
  // @ts-ignore
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const configureStore = (initialState = {}) => (
  createStore(
      rootReducer,
      initialState,
      compose(
          applyMiddleware(
              thunk.withExtraArgument(callApi),
          ),
          devTools,
      ),
  )
);

export default configureStore();
