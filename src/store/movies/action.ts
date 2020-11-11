import {
  APPLY_FILTER,
  APPLY_SEARCH,
  APPLY_SORT,
  CREATE_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  GET_MOVIES,
  HANDLE_ERROR,
} from './types';
import {Movie} from '../../shared/models/movie.type';
import {RootState} from '../rootReducer';

export const getMovies = (payload: Movie[]) => ({
  type: GET_MOVIES,
  payload,
});

export const deleteMovie = (payload: number) => ({
  type: DELETE_MOVIE,
  payload,
});

export const editMovie = (payload: Movie) => ({
  type: EDIT_MOVIE,
  payload,
});

export const createMovie = (payload: Movie) => ({
  type: CREATE_MOVIE,
  payload,
});

// TODO: add error notification
export const handleError = (payload: Error) => ({
  type: HANDLE_ERROR,
  payload,
});

export const applyFilter = (payload: string) => ({
  type: APPLY_FILTER,
  payload,
});

export const applySort = (payload: string) => ({
  type: APPLY_SORT,
  payload,
});

export const applySearch = (payload: string) => ({
  type: APPLY_SEARCH,
  payload,
});

// TODO: Define types for dispatch and api / add loader
export const getMoviesThunk = () => (dispatch: any, state: RootState, api: any) => api('movies')
    .then((res: { data: Movie[] }) => dispatch(getMovies(res.data)))
    .catch((err: Error) => dispatch(handleError(err)));

export const deleteMovieThunk = (movieId: number) => (dispatch: any, state: RootState, api: any) =>
  api(`movies/${movieId}`, 'delete')
      .then(() => dispatch(deleteMovie(movieId)))
      .catch((err: Error) => dispatch(handleError(err)));

export const editMovieThunk = (movie: Movie) => (dispatch: any, state: RootState, api: any) =>
  api(`movies`, 'put', movie)
      .then(() => dispatch(editMovie(movie)))
      .catch((err: Error) => dispatch(handleError(err)));

export const createMovieThunk = (movie: Partial<Movie>) => (dispatch: any, state: RootState, api: any) =>
  api(`movies`, 'post', movie)
      .then((createdMovie: Movie) => dispatch(createMovie(createdMovie)))
      .catch((err: Error) => dispatch(handleError(err)));

