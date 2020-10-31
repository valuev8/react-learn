import React from 'react';
import styled from 'styled-components';
import { Movie } from '../../shared/models/movie.type';
import MovieCardWithControls from '../../components/movieCard/MovieCardWithControls';

const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: 
   minmax(250px, 600px)
   minmax(250px, 600px)
   minmax(250px, 600px)
   minmax(250px, 600px);
  grid-gap: 30px;
  padding: 30px;
  flex-grow: 1;
  & > div {
    width: 100%;
  }
`

type MovieListProps = {
  movies: Movie[];
  onMovieClick: (movie: Movie) => any;
}

const MovieList = ({ movies, onMovieClick }: MovieListProps ) => (
  <StyledMovieList>
    { movies.length
      // PATTERN: Conditional rendering
      ? movies.map((movie) =>
          <MovieCardWithControls
            movie={movie}
            key={movie.id}
            onMovieClick={onMovieClick} />
        )
      : 'Movies not found'
    }
  </StyledMovieList>
);

export default MovieList;
