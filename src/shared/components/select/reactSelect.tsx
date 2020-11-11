import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import {variables} from '@styles/variables.styles';
import {SelectOption} from '../../models/select-option.type';

type ReactSelectProps = {
  options: SelectOption[];
  defaultValue?: SelectOption;
  placeholder?: string;
  multi?: boolean;
  isValid?: boolean;
  onChange: (e: SelectOption | SelectOption[]) => void,
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
    
    &__multi-value {
      background: transparent;
      border: 1px solid ${variables.colorPrimary};
    }
    
    &__multi-value__label {
      color: ${variables.colorPrimary};
    }
    
    &__multi-value__remove:hover {
      color: ${variables.colorSecondary};
      background: transparent;
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
  
  &.error {
    .react-select__control {
      border-color: ${variables.colorDanger} !important;
  }
`;

const ReactSelect = ({options, placeholder, defaultValue, onChange, multi, isValid = true}: ReactSelectProps) => (
  <StyledReactSelect options={ options }
    value={ defaultValue || options[0] }
    placeholder={ placeholder }
    onChange={ onChange }
    isMulti={ multi }
    className={ !isValid ? 'error' : '' }
    classNamePrefix="react-select"/>
);

export default ReactSelect;
