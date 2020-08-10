import React from 'react';
import { Movies } from '../../data/movies';
import MovieCard from '../../components/movieCard/movieCard';
import styled from 'styled-components';

const movies = Movies;

const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 30px;
  padding: 30px;
  & > div {
    width: 100%;
  }
`

const MovieList = () => (
  <StyledMovieList>
    { movies.map((movie) => <MovieCard movie={movie} key={movie.id} />) }
  </StyledMovieList>
);

export default MovieList;
