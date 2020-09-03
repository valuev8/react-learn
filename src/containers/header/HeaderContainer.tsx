import React, { FC } from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';
import SearchBarHeader from './components/SearchBarHeader';
import { Movie } from '../../shared/models/movie.type';
import DetailsHeader from './components/DetailsHeader';

const StyledHeaderWrapper = styled.div`
  padding: 20px;
  min-height: 400px;
  position: relative;
  background: url('../../assets/img/header-bg.jpeg') 50% 75% no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${variables.colorPrimary};
  box-shadow: 0 -5px 20px 1px ${variables.colorPrimary};
  
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${variables.colorBackground};
    opacity: 0.7;
    z-index: 0;
  }
`

type HeaderContainerProps = {
  movie?: Movie,
  onMovieReset: () => void;
}
const HeaderContainer: FC<HeaderContainerProps>= ({ movie, onMovieReset }) => (
    <React.Fragment>
      <StyledHeaderWrapper>
        {
          movie
            ? <DetailsHeader movie={movie} onSearchClick={onMovieReset}/>
            : <SearchBarHeader />
        }
      </StyledHeaderWrapper>
    </React.Fragment>
  );

export default HeaderContainer;
