import * as React from 'react';
import HeaderContainer from '../../containers/header/HeaderContainer';
import FilterBarContainer from '../../containers/filterBar/filterBarContainer';
import MovieList from '../../containers/movieList/movieList';
import Footer from '../../shared/components/footer/footer';
import { Component } from 'react';
import { Movie } from '../../shared/models/movie.type';
import { Movies } from '../../data/movies';
import { SelectOption } from '../../shared/models/select-option.type';

type HomepageState = {
  sortBy: string,
  genreFilter: string;
  movies: Movie[],
  filteredMovies: Movie[],
}

export class Homepage extends Component<{}, HomepageState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      movies: Movies,
      filteredMovies: Movies,
      sortBy: null,
      genreFilter: null,
    }
  }

  handleSort = ({ value }: SelectOption) => {
    this.setState((state) => {
      // @ts-ignore
      return { ...state, filteredMovies: [...state.movies].sort((a, b) => a[value] > b[value] ? 1 : -1)}
    });
  }

  handleFilter = (genreId: string) => {
    this.setState((state) => {
      if (genreId === 'all') {
        return { ...state, filteredMovies: [...state.movies]};
      }

      return { ...state, filteredMovies: [...state.movies]
          .filter((movie) => movie.genres.some((genre) => genre.toUpperCase() === genreId.toUpperCase()))}
    });
  };

  render() {
   return (
     <React.Fragment>
       <HeaderContainer />
       <FilterBarContainer onSort={this.handleSort} onFilter={this.handleFilter}/>
       <MovieList movies={this.state.filteredMovies}/>
       <Footer />
     </React.Fragment>
   )
  }
}
