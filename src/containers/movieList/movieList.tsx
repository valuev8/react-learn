import React from 'react';
import { Movies } from '../../data/movies';
import MovieCard from '../../components/movieCard/movieCard';
import styled from 'styled-components';

const movies = Movies;

const StyledMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  div {
    width: 33.3333%;
    margin: 0 30px;
  }
`

const MovieList = () => (
  <StyledMovieList>
    { movies.map((movie) => <MovieCard movie={movie} key={movie.id} />) }
  </StyledMovieList>
);

export default MovieList;
