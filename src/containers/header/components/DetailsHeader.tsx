import React, { FC } from 'react';
import styled from 'styled-components';
import { Movie } from '../../../shared/models/movie.type';
import Logo from '../../../shared/components/logo/Logo';
import { SearchOutlined } from '@material-ui/icons';
import { variables } from '@styles/variables.styles';
import { dataFormatter } from '../../../shared/helpers/data-formatter';
import RatingBadge from '../../../shared/components/rating-badge/RatingBadge';
import Button from '../../../shared/components/button/Button';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  padding: 20px 0;
  
  img {
   height: 300px;
   width: 200px;
   object-fit: cover;
   display: block;
   margin-right: 30px;
   border: 1px solid ${variables.colorSecondary};
  }
  
  h1 {
    display: flex;
    align-items: center;
    font-size: 41px;
    text-shadow: 0 0 10px ${ variables.colorPrimary };
    span {
      margin-left: 20px;
    }
  }
  
  h2 {
    font-size: 21px;
    color: ${variables.colorPrimary};
    text-shadow: 0 0 10px ${ variables.colorPrimary };
    margin: 15px 0;
  }
  
  .movie-info {
    color: ${variables.colorSecondary};
    font-size: 32px;
    margin: 15px 0;
    span {
      margin-right: 40px;
    }
  }
`

const StyledTopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  
  button {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const StyledHeaderContent = styled.div`
  width: 100%;
`

type DetailsHeaderProps = {
  movie: Movie,
  onSearchClick: () => void;
}

const DetailsHeader: FC<DetailsHeaderProps> = ({ movie, onSearchClick }) => (
  <React.Fragment>
    <StyledTopSection>
      <Logo />
      <Button width={40} onClick={onSearchClick}>
        <SearchOutlined />
      </Button>
    </StyledTopSection>
    <StyledContainer>
      <img src={movie.poster_path} alt={movie.title}/>
      <StyledHeaderContent>
        <h1>
          { movie.title }
          <RatingBadge size={20} rating={movie.vote_average} />
        </h1>
        <h2>{ movie.tagline }</h2>
        <div className="movie-info">
          <span> { dataFormatter(movie.release_date) } </span>
          <span> { movie.runtime } min </span>
        </div>
        <p className="movie-description">
          { movie.overview }
        </p>
      </StyledHeaderContent>
    </StyledContainer>
  </React.Fragment>
);

export default DetailsHeader;
