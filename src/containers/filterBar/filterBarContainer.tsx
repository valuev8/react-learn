import React, { FC } from 'react';
import GenreFilter from '../../components/filter/genreFilter/genreFilter';
import styled from 'styled-components';
import SortFilter from '../../components/filter/sortFilter/sortFilter';
import { variables } from '@styles/variables.styles';
import { SelectOption } from '../../shared/models/select-option.type';

const genres = [
  {
    genreId: 'all',
    genreName: 'all',
  },
  {
    genreId: 'adventure',
    genreName: 'adventure',
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
  { value: 'release_date', label: 'Release Date' },
  { value: 'revenue', label: 'Revenue' },
  { value: 'title', label: 'Movie Title' },
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

type FilterBarProps = {
  onSort: (e: SelectOption) => void,
  onFilter: (e: string) => void,
}

const FilterBarContainer: FC<FilterBarProps> = ({ onSort, onFilter }: FilterBarProps) => (
  <StyledWrapper>
    <GenreFilter genres={ genres } onFilter={onFilter}/>
    <SortFilter options={ options } onSort={onSort} />
  </StyledWrapper>
);

export default FilterBarContainer;
