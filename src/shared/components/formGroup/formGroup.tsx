import React, { useState } from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';
import ReactSelect from '../select/reactSelect';
import { SelectOption } from '../../models/select-option.type';

// TODO: create shared input component
const StyledInput = styled.input`
  background: ${ variables.colorBackground };
  color: ${ variables.colorPrimary };
  border-radius: 3px;
  padding: 0 15px;
  height: 38px;
  border: 1px solid ${ variables.colorPrimary };
  box-shadow: 0 0 10px 0 ${ variables.colorPrimary };
  width: 100%;
  transition: all .2s;
  position: relative;
  
  &:focus::placeholder {
    opacity: 0;
  }
  
  &:hover, &:focus {
    outline: none;
    border: 1px solid ${ variables.colorPrimary };
    box-shadow: 0 0 20px 1px ${ variables.colorPrimary };
  }
  
  &::placeholder {
    color: ${ variables.colorPrimary };
    opacity: .7;
  }
`

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  
  .react-select__control {
    border-color: ${variables.colorPrimary} !important;
  }
  
  label {
    margin-bottom: 10px;
    color: ${variables.colorSecondary};
    text-transform: uppercase;
    font-size: 12px;
  }
  
  input[type="date"]::-webkit-calendar-picker-indicator {
        background: transparent;
        bottom: 0;
        color: transparent;
        cursor: pointer;
        height: auto;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
    }
`

type FormGroupProps = {
  label: string;
  id: string;
  value?: any;
  placeholder?: string;
  readOnly?: boolean;
  type?: 'text' | 'date' | 'select' | 'number';
  onChange?: (value: { id: string, value: string | string[] | number }) => any;
}

const defaultOptions: SelectOption[] = [
  { value: 'drama', label: 'Drama' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'horror', label: 'Horror' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'action', label: 'Action' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'science fiction', label: 'Science Fiction' },
];

const FormGroup = (props: FormGroupProps) => {
  const {
    label,
    id,
    placeholder,
    value,
    readOnly,
    onChange,
    type = 'text',
  } = props;
  const [inputValue, setValue] = useState(value);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange( { id, value: event.target.value });
  }

  const handleSelectChange = (option: SelectOption[]) => {
    setValue(option);
    onChange({ id: 'genres', value: option.map((o) => o.value) });
  }

  switch (type) {
    case ('number'):
    case ('text'): {
      return (
        <StyledFieldset>
          <label htmlFor={ id }> { label } </label>
          <StyledInput
            id={ id }
            placeholder={ placeholder }
            value={ inputValue }
            readOnly={ readOnly }
            type={type}
            onChange={ handleValueChange }/>
        </StyledFieldset>
      )
    }

    case ('date'): {
      return (
        <StyledFieldset>
          <label htmlFor={ id }> { label } </label>
          <StyledInput
            id={ id }
            placeholder={ placeholder }
            value={ inputValue }
            readOnly={ readOnly }
            type="date"
            onChange={ handleValueChange }/>
        </StyledFieldset>
      )
    }

    case ('select'): {
      return (
        <StyledFieldset>
          <label htmlFor={ id }> { label } </label>
          <ReactSelect
            options={defaultOptions}
            defaultValue={ inputValue.map((value: string) => ({ value, label: value })) }
            onChange={ handleSelectChange }
            multi={ true }/>
        </StyledFieldset>
      )
    }
  }
}

export default FormGroup;
