import * as React from 'react';
import HeaderContainer from '../../containers/header/HeaderContainer';
import FilterBarContainer from '../../containers/filterBar/filterBarContainer';
import MovieList from '../../containers/movieList/movieList';
import Footer from '../../shared/components/footer/footer';
import { FC, useEffect, useState } from 'react';
import { SelectOption } from '../../shared/models/select-option.type';
import { Movie } from '../../shared/models/movie.type';
import { connect, useDispatch } from 'react-redux';
import { applyFilter, applySort, getMoviesThunk } from '../../store/movies/action';
import { RootState } from '../../store/rootReducer';

type HomepageProps = {
  movies: Movie[],
  filteredMovies: Movie[],
  getMoviesThunk: () => void;
}

const Homepage: FC<HomepageProps> = ({ filteredMovies = [], getMoviesThunk }: HomepageProps) => {
  const dispatch = useDispatch();
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMoviesThunk();
  }, [])

  const handleSort = ({ value }: SelectOption) => {
    dispatch(applySort(value));
  }

  const handleFilter = (genreId: string) => {
    dispatch(applyFilter(genreId));
  };

  const onMovieSelect = (movie: Movie) => setSelectedMovie(movie);

  return (
   <React.Fragment>
     <HeaderContainer movie={selectedMovie} onMovieReset={() => onMovieSelect(null)}/>
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
