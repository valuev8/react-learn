import React, { FC } from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';

type MovieCardProps = {
  movie: Movie;
}

type Movie = {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  overview: string,
  budget: number,
  revenue: number,
  genres: string[],
  runtime: number
}

const StyledMovieCard = styled.div`
  width: 300px;
  .card-image {
    height: 600px;
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .card-info {
    display: flex;
    justify-content: space-between;
    
    &__year {
      border: 1px solid ${variables.colorPrimary};
      border-radius: 3px;
    }
  }
`
const MovieCard: FC<MovieCardProps> = ({ movie }) => (
  <StyledMovieCard>
    <div className="card-image">
      <img src={ movie.poster_path } alt="Movie Poster"/>
    </div>
    <div className="card-info">
      <h2 className="card-info__title">
        { movie.title }
      </h2>
      <span className="card-info__year">
              { movie.release_date }
            </span>
    </div>
    <div className="genres">
      { movie.genres.map((genre: string) => <span key={genre}> { genre } </span>)}
    </div>
  </StyledMovieCard>
);

export default MovieCard;
