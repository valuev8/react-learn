import * as React from 'react';
import HeaderContainer from '../../containers/header/HeaderContainer';
import FilterBarContainer from '../../containers/filterBar/filterBarContainer';
import MovieList from '../../containers/movieList/movieList';
import Footer from '../../shared/components/footer/footer';
import { useState } from 'react';
import { Movies } from '../../data/movies';
import { SelectOption } from '../../shared/models/select-option.type';
import { Movie } from '../../shared/models/movie.type';

export const Homepage = () => {
  const [movies] = useState(Movies);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSort = ({ value }: SelectOption) => {
    setFilteredMovies([...movies].sort((a, b) => a[value] > b[value] ? 1 : -1));
  }

  const handleFilter = (genreId: string) => {
    if (genreId === 'all') {
      setFilteredMovies([...movies]);
      return;
    }

    setFilteredMovies([...movies]
          .filter((movie) => movie.genres.some((genre) => genre.toUpperCase() === genreId.toUpperCase())))
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
