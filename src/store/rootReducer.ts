import { combineReducers } from 'redux';
import moviesReducer, { MoviesState } from './movies/reducer';

export type RootState = {
  moviesReducer: MoviesState,
};

export const rootReducer = combineReducers({
  moviesReducer,
});
