import React from 'react';
import styled from 'styled-components';
import Logo from '../logo/Logo';
import { variables } from '@styles/variables.styles';

const StyledFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${ variables.colorSecondary };
  box-shadow: 0 0 10px 1px ${ variables.colorSecondary };
  a {
    font-size: 18px;
  }
`

const Footer = () => (
  <StyledFooter>
    <Logo />
  </StyledFooter>
);

export default Footer;
