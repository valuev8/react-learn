import React from 'react';
import styled from 'styled-components';
import {variables} from '@styles/variables.styles';

const StyledLogo = styled.a`
  font-family: ${variables.fontLogo};
  font-size: 31px;
  color: ${variables.colorPrimary};
  text-decoration: none;
  transition: .2s;
  &:hover {
    text-decoration: none;
    color: ${variables.colorSecondary};
  }
`;
const Logo = () => (
  <StyledLogo href="#"> Cyber Movies </StyledLogo>
);

export default Logo;
