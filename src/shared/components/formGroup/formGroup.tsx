import React from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';
import ReactSelect from '../select/reactSelect';
import { SelectOption } from '../../models/select-option.type';
import { useField } from 'formik';

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
  
  &.error {
    border-color: ${ variables.colorDanger };
    box-shadow: 0 0 10px 0 ${ variables.colorDanger };
    
    &:hover, &:focus {
      border-color: ${ variables.colorDanger };
      box-shadow: 0 0 10px 0 ${ variables.colorDanger };
    }
  }
  
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
  position: relative;
  
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
    
  .error-msg {
    color: ${variables.colorDanger};
    font-size: 12px;
    position: absolute;
    top: 0;
    right: 0;
  }
`

interface FormGroupProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'date' | 'select' | 'number';
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

const FormGroup = ({ label, type, placeholder, ...props }: FormGroupProps) => {
  const [field, meta, helpers] = useField(props.name);

  const setSelectValue = (options: SelectOption[]): void => {
    helpers.setTouched(true);
    helpers.setValue(options?.map((option: SelectOption) => option.value) || []);
  }

  switch (type) {
    case ('number'):
    case ('date'):
    case ('text'):
    default: {
      return (
        <StyledFieldset>
          <label htmlFor={ props.name }> { label } </label>
          <StyledInput
            id={ props.name }
            type={ type }
            className={ meta.error && meta.touched ? 'error' : '' }
            placeholder={ placeholder }
            {...field}
            {...props} />
          { meta.error && meta.touched && <span className='error-msg'>{meta.error}</span> }
        </StyledFieldset>
      )
    }

    case ('select'): {
      return (
        <StyledFieldset>
          <label htmlFor={ props.name }> { label } </label>
          <ReactSelect
            options={defaultOptions}
            defaultValue={ field.value.map((value: string) => ({ value, label: value })) as any }
            onChange={ setSelectValue }
            isValid={ !meta.error }
            multi={ true }/>
          { meta.error && meta.touched && <span className='error-msg'>{meta.error}</span> }
        </StyledFieldset>
      )
    }
  }
}

export default FormGroup;
