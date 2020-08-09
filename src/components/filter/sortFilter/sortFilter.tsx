import React, { FC } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';

type SelectOptions = {
  value: string;
  label: string;
}

type SortFilterProps = {
  options: SelectOptions[];
}

const StyledSortFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  span {
    margin-right: 15px;
    color: ${variables.colorSecondary}
  }
`

// TODO: move dropdown to separate component
const StyledReactSelect = styled(Select)`
  min-width: 250px;
  .react-select {
    &__control {
      background: ${variables.colorBackground};
      border-color: ${variables.colorSecondary};
      
      &--is-focused {
        outline: none;
      }
      
      &:hover {
        border-color: ${variables.colorSecondary};
        box-shadow:
         0 0 7px 0 ${variables.colorSecondary},
         inset 0 0 7px 0 ${variables.colorSecondary};
      }
    }
    
    &__indicator {
      color: ${variables.colorSecondary};
      &:hover {
        color: ${variables.colorSecondary}
      }
    }
    
    &__indicator-separator {
      background-color: ${variables.colorSecondary};
    }
    
    &__single-value {
      color: ${variables.colorPrimary}
    }
    
    &__menu {
      background: ${variables.colorBackground};
    }
    
    &__option {
      cursor: pointer;
    
      &:hover {
        background: transparent;
        text-shadow: 
          0 0 10px ${variables.colorPrimary},
          0 0 30px ${variables.colorPrimary}
      }
      
      &--is-selected {
        background: transparent;
        box-shadow:
         inset 0 0 7px 0 ${variables.colorPrimary};
        color: ${variables.colorPrimary};
      }
      &--is-focused {
        background: transparent;
      }
    }
  }
  
  
`;

const SortFilter: FC<SortFilterProps> = ({ options }) => (
  <StyledSortFilter>
    <span>Sort By</span>
    <StyledReactSelect options={ options }
                       defaultValue={ options[0] }
                       classNamePrefix="react-select"/>
  </StyledSortFilter>
);

export default SortFilter;
