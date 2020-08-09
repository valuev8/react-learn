import React from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';

const StyledLogo = styled.a`
  font-family: ${variables.fontLogo};
  font-size: 31px;
`
const Logo = () => (
  <StyledLogo> Cyber Movies </StyledLogo>
);

export default Logo;
