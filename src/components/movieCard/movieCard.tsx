import React, { Component, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';
import { dataFormatter } from '../../shared/helpers/data-formatter';
import DotsButton from '../../shared/components/dotsButton/dotsButton';
import { Popover } from '@material-ui/core';
import ModalLauncher from '../../shared/components/modal/ModalLauncher';
import CreateEditMovieModal from '../modals/CreateEditMovieModal';
import { Movie } from '../../shared/models/movie.type';

type MovieCardProps = {
  movie: Movie;
}

const StyledPopover = styled(Popover)`
  .MuiPaper-root {
    display: flex;
    flex-direction: column;
    background: ${variables.colorBackground};
  }
`

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
class MovieCard extends Component<MovieCardProps, { popoverAnchor: Element | null, open: boolean }> {

  constructor(props: MovieCardProps) {
    super(props);
    this.state = {
      popoverAnchor: null,
      open: false,
    };
  }

  handleClick = (event: SyntheticEvent) => {
    this.setState({ popoverAnchor: event.currentTarget, open: !this.state.open})
  };

  handleClose = () => {
    this.setState({ open: false})
  };

  popoverAnchor = () => this.state.popoverAnchor;

  isOpen = () => this.state.open;

  render() {
    return (
      <StyledMovieCard>
        <div className="card-image">
          <img src={ this.props.movie.poster_path } alt="Movie Poster"/>
          <DotsButton onClick={this.handleClick}/>
          <StyledPopover
            open={this.isOpen()}
            anchorEl={this.popoverAnchor}
            onClose={this.handleClose}
          >
            <ModalLauncher width='150' label='Edit' modalHeader='Edit Movie'>
              <CreateEditMovieModal data={this.props.movie} type='edit' />
            </ModalLauncher>
            <ModalLauncher width='150' label='Delete' modalHeader='Delete Movie'>
              Are you sure you want to delete this movie?
            </ModalLauncher>
          </StyledPopover>
        </div>
        <div className="card-info">
          <h2 className="card-info__title">
            { this.props.movie.title }
          </h2>
          <span className="card-info__year">
        { dataFormatter(this.props.movie.release_date) }
      </span>
        </div>
        <div className="genres">
          { this.props.movie.genres.join(', ') }
        </div>
      </StyledMovieCard>
    )
  }
}

export default MovieCard;
