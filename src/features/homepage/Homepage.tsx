import * as React from 'react';
import HeaderContainer from '../../containers/header/HeaderContainer';
import FilterBarContainer from '../../containers/filterBar/filterBarContainer';
import MovieList from '../../containers/movieList/movieList';
import Footer from '../../shared/components/footer/footer';
import { FC, useEffect } from 'react';
import { SelectOption } from '../../shared/models/select-option.type';
import { Movie } from '../../shared/models/movie.type';
import { connect, useDispatch } from 'react-redux';
import { applyFilter, applySort, getMoviesThunk } from '../../store/movies/action';
import { RootState } from '../../store/rootReducer';
import { useHistory } from 'react-router';

type HomepageProps = {
  movies: Movie[],
  filteredMovies: Movie[],
  getMoviesThunk: () => void;
}

const Homepage: FC<HomepageProps> = ({ filteredMovies = [], getMoviesThunk }: HomepageProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    getMoviesThunk();
  }, [])

  const handleSort = ({ value }: SelectOption) => {
    dispatch(applySort(value));
  }

  const handleFilter = (genreId: string) => {
    dispatch(applyFilter(genreId));
  };

  const onMovieSelect = (movie: Movie) => {
    history.push(`/movies/${movie.id}`, { ...movie })
  };

  return (
   <React.Fragment>
     <HeaderContainer />
     <FilterBarContainer onSort={handleSort} onFilter={handleFilter}/>
     <MovieList movies={filteredMovies} onMovieClick={onMovieSelect}/>
     <Footer />
   </React.Fragment>
  )
}

const mapStateToProps = ({ moviesReducer }: RootState, _: {}) => ({
  movies: moviesReducer.movies,
  filteredMovies: moviesReducer.filteredMovies,
});

export default connect(
  mapStateToProps,
  { getMoviesThunk },
)(Homepage);
