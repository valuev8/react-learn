import React, { FC } from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';
import ReactSelect from '../../../shared/components/select/reactSelect';
import { SelectOption } from '../../../shared/models/select-option.type';

type SortFilterProps = {
  options: SelectOption[];
}

const StyledSortFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  span {
    margin-right: 15px;
    color: ${variables.colorSecondary}
  }
`;

const SortFilter: FC<SortFilterProps> = ({ options }) => (
  <StyledSortFilter>
    <span>Sort By</span>
    <ReactSelect options={ options }
                 defaultValue={ options[0] } />
  </StyledSortFilter>
);

export default SortFilter;
