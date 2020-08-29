import React from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';

// TODO: create shared input component
const StyledInput = styled.input`
  background: ${ variables.colorBackground };
  color: ${ variables.colorPrimary };
  border-radius: 3px;
  padding: 0 15px;
  height: 30px;
  border: 1px solid ${ variables.colorPrimary };
  box-shadow: 0 0 10px 0 ${ variables.colorPrimary };
  width: 100%;
  transition: all .2s;
  
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
  
  label {
    margin-bottom: 10px;
    color: ${variables.colorSecondary};
    text-transform: uppercase;
    font-size: 12px;
  }
`

type FormGroupProps = {
  label: string;
  id: string;
  placeholder?: string;
  onChange?: () => any;
}

// TODO: add input type prop (select, datepicker, textarea, input);
const FormGroup = ({ label, id, placeholder, onChange }: FormGroupProps) => (
  <StyledFieldset>
    <label htmlFor={id}> { label } </label>
    <StyledInput
      id={id}
      placeholder={placeholder}
      type="text"
      onChange={() => onChange}/>
  </StyledFieldset>
);

export default FormGroup;
