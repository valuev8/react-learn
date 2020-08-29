import * as React from 'react';
import HeaderContainer from '../../containers/header/HeaderContainer';
import FilterBarContainer from '../../containers/filterBar/filterBarContainer';
import MovieList from '../../containers/movieList/movieList';
import Footer from '../../shared/components/footer/footer';

export const Homepage = () => (
  <React.Fragment>
    <HeaderContainer />
    <FilterBarContainer />
    <MovieList />
    <Footer />
  </React.Fragment>
);
