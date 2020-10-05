import React, { FC } from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';
import { Link } from 'react-router-dom';
import Button from '../../shared/components/button/Button';

const StyledNotFoundPage = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
  text-align: center;
    
  h2 {
    --neon: hsl(355 100% 95%);
    --neon-glow: hsl(355 98% 40%);
  }
  
  h1 {
    --neon: hsl(192 100% 95%);
    --neon-glow: hsl(194 100% 40%);
  }

  h1, h2 {
    color: var(--neon);
    font-size: 15vmin;
    font-family: ${variables.fontNeon}, sans-serif;
    text-shadow: 
      0 0 20px var(--neon-glow),
      0 0 2.5vmin var(--neon-glow),
      0 0 5vmin var(--neon-glow),
      0 0 10vmin var(--neon-glow),
      0 0 15vmin var(--neon-glow);
  }
  
  h2 {
    font-size: 10vmin;
    margin-bottom: 50px;
  }
`

const NotFound: FC = () => (
  <StyledNotFoundPage>
    <h1>404</h1>
    <h2> Page Not Found </h2>
    <Link to="/movies">
      <Button> Go back to home</Button>
    </Link>
  </StyledNotFoundPage>
);

export default NotFound;
