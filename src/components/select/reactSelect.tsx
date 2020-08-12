import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { variables } from '@styles/variables.styles';
import { SelectOption } from '../../shared/models/select-option.type';

type ReactSelectProps = {
  options: SelectOption[];
  defaultValue?: SelectOption;
  placeholder?: string;
}

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

const ReactSelect = ({ options, placeholder, defaultValue }: ReactSelectProps) => (
  <StyledReactSelect options={ options }
                     defaultValue={ defaultValue || options[0] }
                     placeholder={ placeholder }
                     classNamePrefix="react-select"/>
);

export default ReactSelect;
