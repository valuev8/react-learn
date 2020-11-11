import React, {FC} from 'react';
import styled from 'styled-components';
import {variables} from '@styles/variables.styles';
import {dataFormatter} from '../../shared/helpers/data-formatter';
import {Movie} from '../../shared/models/movie.type';

type MovieCardProps = {
  movie: Movie;
  onMovieClick?: (movie: Movie) => any;
}

const StyledMovieCard = styled.div`
  .card-image {
    height: 500px;
    width: 100%;
    cursor: pointer;
    transition: all .2s;
    box-shadow: 0 0 7px 0 ${ variables.colorPrimary };

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
`;

const MovieCard: FC<MovieCardProps> = ({movie, onMovieClick}) => (
  <StyledMovieCard>
    <div className="card-image" onClick={() => onMovieClick(movie)}>
      <img src={ movie.poster_path } alt="Movie Poster"/>
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
