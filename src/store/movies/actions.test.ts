import configureMockStore from 'redux-mock-store';
import {createMovieThunk, deleteMovieThunk, editMovieThunk, getMoviesThunk} from './action';
import thunk from 'redux-thunk';
import callApi from '../../api/callApi';
import axios from 'axios';
import {Movie} from '../../shared/models/movie.type';

let store: any;
const mockMovie = {
  title: 'test',
};
jest.mock('axios');
const middlewares = [thunk.withExtraArgument(callApi)];
const mockStore = configureMockStore(middlewares);

describe('movie actions', () => {
  beforeEach(() => {
    store = mockStore({});
  });

  it('creates GET_MOVIES when getting movies was successful', () => {
    // @ts-ignore
    axios.get.mockResolvedValueOnce({data: [mockMovie]});

    return store.dispatch(getMoviesThunk())
        .then(() => {
          expect(store.getActions()).toMatchSnapshot();
        });
  });

  it('creates DELETE_MOVIES when deleting movies was successful', () => {
    // @ts-ignore
    axios.delete.mockResolvedValueOnce({data: [mockMovie]});

    return store.dispatch(deleteMovieThunk(1))
        .then(() => {
          expect(store.getActions()).toMatchSnapshot();
        });
  });

  it('creates EDIT_MOVIES when updating movies was successful', () => {
    // @ts-ignore
    axios.put.mockResolvedValueOnce({data: [mockMovie]});

    return store.dispatch(editMovieThunk(mockMovie as Movie))
        .then(() => {
          expect(store.getActions()).toMatchSnapshot();
        });
  });

  it('creates CREATE_MOVIE when creating movie was successful', () => {
    // @ts-ignore
    axios.post.mockResolvedValueOnce({data: [mockMovie]});

    return store.dispatch(createMovieThunk(mockMovie as Movie))
        .then(() => {
          expect(store.getActions()).toMatchSnapshot();
        });
  });
});
