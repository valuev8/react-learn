import reducer, { MoviesState } from './reducer';
import { Movie } from '../../shared/models/movie.type';

const initialState: MoviesState = {
  movies: [],
  filteredMovies: [],
  searchQuery: '',
}
const mockMovie = { title: 'test', id: 1 } as Movie;

describe('movies reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should handle GET_MOVIES', () => {
    expect(
      reducer(initialState,
        {
          type: 'GET_MOVIES', payload: [mockMovie],
        })
    ).toMatchSnapshot()
  });

  it('should handle CREATE_MOVIE', () => {
    expect(
      reducer(initialState,
        {
          type: 'CREATE_MOVIE', payload: mockMovie,
        })
    ).toMatchSnapshot()
  });

  it('should handle EDIT_MOVIE', () => {
    expect(
      reducer({ ...initialState, movies: [mockMovie] },
        {
          type: 'EDIT_MOVIE', payload: {...mockMovie, title: 'test2'},
        })
    ).toMatchSnapshot()
  });

  it('should handle DELETE_MOVIE', () => {
    expect(
      reducer({ ...initialState, movies: [mockMovie] },
        {
          type: 'DELETE_MOVIE', payload: 1,
        })
    ).toMatchSnapshot()
  });
})
