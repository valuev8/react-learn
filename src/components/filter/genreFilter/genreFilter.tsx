import React, { FC } from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';

type Genre = {
  genreName: string;
  genreId: string;
};

type GenreFilterProps = {
  genres: Genre[];
  onFilter: (e: string) => void;
}

const StyledGenresList = styled.ul`
  list-style: none;
  display: flex;
  li {
    color: ${variables.colorSecondary};
    text-transform: uppercase;
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    transition: all .2s;
    font-size: 14px;
    &:hover {
      text-shadow: 
      0 0 10px ${variables.colorSecondary},
      0 0 30px ${variables.colorSecondary}
    }
  }
`

const GenreFilter: FC<GenreFilterProps> = ({ genres, onFilter }: GenreFilterProps) => (
    <StyledGenresList>
      {
        genres.map((genre: Genre) =>
          <li
            key={genre.genreId}
            onClick={() => onFilter(genre.genreId)}>
            { genre.genreName }
          </li>
        )
      }
    </StyledGenresList>
  );

export default GenreFilter;
