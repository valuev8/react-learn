import React from 'react';
import MovieCard from '../../components/movieCard/movieCard';
import styled from 'styled-components';
import { Movie } from '../../shared/models/movie.type';

const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: 
   minmax(250px, auto)
   minmax(250px, auto)
   minmax(250px, auto)
   minmax(250px, auto);
  grid-gap: 30px;
  padding: 30px;
  flex-grow: 1;
  & > div {
    width: 100%;
  }
`

type MovieListProps = {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps ) => (
  <StyledMovieList>
    { movies.length
      ? movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      : 'Movies not found'
    }
  </StyledMovieList>
);

export default MovieList;
