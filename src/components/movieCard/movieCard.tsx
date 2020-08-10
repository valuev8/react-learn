import React, { FC } from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';
import { dataFormatter } from '../../shared/helpers/data-formatter';
import DotsButton from '../dotsButton/dotsButton';

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
    height: 500px;
    width: 100%;
    cursor: pointer;
    transition: all .2s;
    box-shadow: 0 0 7px 0 ${ variables.colorPrimary };
    position: relative;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .dots-btn {
    position: absolute;
    right: 15px;
    top: 15px;
    visibility: hidden;
    transition: .2s;
  }
  
  .card-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    
    &__year {
      border: 1px solid ${variables.colorPrimary};
      border-radius: 3px;
      padding: 5px;
      font-size: 12px;
    }
  }
  
  .genres {
    font-size: 12px;
    color: ${variables.colorSecondary};
  }
  
  &:hover {
    .dots-btn {
      visibility: visible;
    }
    
    .card-image {
      box-shadow: 0 0 15px 1px ${ variables.colorPrimary };
    }
  }
`
const MovieCard: FC<MovieCardProps> = ({ movie }) => (
  <StyledMovieCard>
    <div className="card-image">
      <img src={ movie.poster_path } alt="Movie Poster"/>
      <DotsButton />
    </div>
    <div className="card-info">
      <h2 className="card-info__title">
        { movie.title }
      </h2>
      <span className="card-info__year">
        { dataFormatter(movie.release_date) }
      </span>
    </div>
    <div className="genres">
      { movie.genres.join(', ') }
    </div>
  </StyledMovieCard>
);

export default MovieCard;
