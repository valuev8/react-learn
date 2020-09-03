import React, { FC, useState } from 'react';
import { Movie } from '../../shared/models/movie.type';
import MovieCard from './movieCard';
import styled from 'styled-components';
import DotsButton from '../../shared/components/dotsButton/dotsButton';
import ModalLauncher from '../../shared/components/modal/ModalLauncher';
import CreateEditMovieModal from '../modals/CreateEditMovieModal';
import { Menu, MenuItem } from '@material-ui/core';
import { variables } from '@styles/variables.styles';


const StyledMenu = styled(Menu)`
  .MuiMenu-list {
    background: ${variables.colorBackground};
    padding: 0;
  }
  
  .MuiListItem-root {
    padding: 0;
  }
`

const StyledMovieCardWrapper = styled.div`
  position: relative;
  
  .dots-btn {
    position: absolute;
    right: 15px;
    top: 15px;
    visibility: hidden;
    transition: .2s;
  }
  
  &:hover {
    .dots-btn {
      visibility: visible;
    }
  }
`

type MovieCardWithControlsProps = {
  movie: Movie,
  onMovieClick?: (movie: Movie) => any;
}

const MovieCardWithControls: FC<MovieCardWithControlsProps> = ({ movie, onMovieClick }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledMovieCardWrapper>
      <DotsButton onClick={handleClick}/>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleClose}>
          <ModalLauncher width='100' label='Edit' modalHeader='Edit Movie'>
            <CreateEditMovieModal data={movie} type='edit' />
          </ModalLauncher>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ModalLauncher width='100' label='Delete' modalHeader='Delete Movie'>
            Are you sure you want to delete this movie?
          </ModalLauncher>
        </MenuItem>
      </StyledMenu>
      <MovieCard movie={movie} onMovieClick={onMovieClick}/>
    </StyledMovieCardWrapper>
  )
};

export default MovieCardWithControls;
