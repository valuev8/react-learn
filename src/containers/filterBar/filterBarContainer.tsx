import React, { FC } from 'react';
import GenreFilter from '../../components/filter/genreFilter/genreFilter';
import styled from 'styled-components';
import SortFilter from '../../components/filter/sortFilter/sortFilter';
import { variables } from '@styles/variables.styles';

const genres = [
  {
    genreId: 'all',
    genreName: 'all',
  },
  {
    genreId: 'doc',
    genreName: 'documentary',
  },
  {
    genreId: 'comedy',
    genreName: 'comedy',
  },
  {
    genreId: 'horror',
    genreName: 'horror',
  },
  {
    genreId: 'crime',
    genreName: 'crime',
  },
]

const options = [
  { value: 'date', label: 'Release Date' },
  { value: 'rating', label: 'Rating' },
  { value: 'name', label: 'Movie Title' },
]

const StyledWrapper = styled.div`
  padding: 15px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${variables.colorPrimary};
  box-shadow:
         0 0 7px 0 ${variables.colorPrimary},
         inset 0 0 7px 0 ${variables.colorPrimary};
`;

const FilterBarContainer: FC = () => (
  <StyledWrapper>
    <GenreFilter genres={ genres } />
    <SortFilter options={ options } />
  </StyledWrapper>
);

export default FilterBarContainer;
