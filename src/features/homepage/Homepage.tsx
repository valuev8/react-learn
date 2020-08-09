import * as React from 'react';
import HeaderContainer from '../../containers/header/HeaderContainer';
import FilterBarContainer from '../../containers/filterBar/filterBarContainer';
import MovieList from '../../containers/movieList/movieList';

export const Homepage = () => (
  <React.Fragment>
    <HeaderContainer />
    <FilterBarContainer />
    <MovieList />
  </React.Fragment>
);
