import React, {FC, useState} from 'react';
import {Movie} from '../../shared/models/movie.type';
import MovieCard from './movieCard';
import styled from 'styled-components';
import DotsButton from '../../shared/components/dotsButton/dotsButton';
import CreateEditMovieModal from '../modals/CreateEditMovieModal';
import {Menu, MenuItem} from '@material-ui/core';
import {variables} from '@styles/variables.styles';
import DeleteMovieModal from '../modals/DeleteMovieModal';
import {connect, useDispatch} from 'react-redux';
import {deleteMovieThunk, editMovieThunk} from '../../store/movies/action';


const StyledMenu = styled(Menu)`
  .MuiMenu-list {
    background: ${variables.colorBackground};
    padding: 0;
  }
  
  .MuiListItem-root {
    padding: 0;
  }
`;

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
`;

type MovieCardWithControlsProps = {
  movie: Movie,
  onMovieClick?: (movie: Movie) => any;
}

const MovieCardWithControls: FC<MovieCardWithControlsProps> = ({movie, onMovieClick}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteMovie = () => {
    dispatch(deleteMovieThunk(movie.id));
  };

  const updateMovie = (movie: Movie) => {
    dispatch(editMovieThunk(movie));
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
          <CreateEditMovieModal data={movie} type='edit' onConfirm={updateMovie}/>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteMovieModal onConfirm={deleteMovie}/>
        </MenuItem>
      </StyledMenu>
      <MovieCard movie={movie} onMovieClick={onMovieClick}/>
    </StyledMovieCardWrapper>
  );
};

export default connect()(MovieCardWithControls);
