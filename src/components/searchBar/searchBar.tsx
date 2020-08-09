import React from 'react';
import Button from '../button/Button';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';

const StyledInput = styled.input`
  background: ${ variables.colorBackground };
  color: ${ variables.colorPrimary };
  border-radius: 3px;
  padding: 15px;
  height: 30px;
  border: 1px solid ${ variables.colorPrimary };
  box-shadow: 0 0 10px 0 ${ variables.colorPrimary };
  margin: 0 10px;
  width: 400px;
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
const SearchBar = () => (
  <React.Fragment>
    <StyledInput type='search' placeholder='What do you want to watch?'/>
    <Button theme='solid' height='33' width='150'> Search </Button>
  </React.Fragment>
);

export default SearchBar;
