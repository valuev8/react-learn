import { Movie } from '../../shared/models/movie.type';
import { Reducer } from 'react';
import { APPLY_FILTER, APPLY_SORT, CREATE_MOVIE, DELETE_MOVIE, EDIT_MOVIE, GET_MOVIES } from './types';

type Action =
  | { type: typeof GET_MOVIES, payload: Movie[] }
  | { type: typeof CREATE_MOVIE, payload: Movie }
  | { type: typeof EDIT_MOVIE, payload: Movie }
  | { type: typeof DELETE_MOVIE, payload: number }
  | { type: typeof APPLY_FILTER, payload: string }
  | { type: typeof APPLY_SORT, payload: string }

export type MoviesState = {
  movies: Movie[];
  filteredMovies: Movie[];
}

const initialState: MoviesState = {
  movies: [],
  filteredMovies: [],
}

const moviesReducer: Reducer<MoviesState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        filteredMovies: action.payload,
      };

    case CREATE_MOVIE:
      return {
        ...state,
        movies: [action.payload, ...state.movies],
        filteredMovies: [action.payload, ...state.movies],
      };

    case EDIT_MOVIE:
      return {
        ...state,
        movies: editMovie(state.movies, action.payload),
        filteredMovies: editMovie(state.filteredMovies, action.payload),
      };

    case DELETE_MOVIE:
      return {
        ...state,
        movies: deleteMovie(state.movies, action.payload),
        filteredMovies: deleteMovie(state.filteredMovies, action.payload),
      };

    case APPLY_FILTER:
      return {
        ...state,
        filteredMovies: handleFilter(action.payload, state.movies),
      };

    case APPLY_SORT:
      return {
        ...state,
        filteredMovies: handleSort(action.payload, state.filteredMovies),
      };

    default:
      return state;
  }
}

const deleteMovie = (movies: Movie[], movieId: number): Movie[] => {
  return movies.filter((movie: Movie) => movie.id !== movieId)
};

const editMovie = (movies: Movie[], editedMovie: Movie): Movie[] => {
  return movies.map((movie: Movie) => {
    return movie.id === editedMovie.id
      ? { ...editedMovie }
      : { ...movie }
  });
};

const handleFilter = (genreId: string, movies: Movie[]): Movie[] => {
  if (genreId === 'all') {
    return [...movies];
  }

  return [...movies]
    .filter((movie: Movie) => movie.genres.some((genre) => genre.toUpperCase() === genreId.toUpperCase()));
};

const handleSort = (sortKey: string, movies: Movie[]) => {
  return [...movies].sort((a, b) => a[sortKey] > b[sortKey] ? 1 : -1);
}

export default moviesReducer;
