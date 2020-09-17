import * as React from 'react';
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components';
import { variables } from '@styles/variables.styles';
import { ErrorBoundary } from './shared/error-handlers/errorBoundary/errorBoundary';
import Homepage from './features/homepage/Homepage';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
     font-family: 'Northstar';
     src: url('assets/fonts/NorthstarGradient-BKB3.otf');
  }
  
  body {
    background: ${variables.colorBackground};
    color: ${variables.colorPrimary};
    font-family: ${variables.fontPrimary};
    height: 100%;
  }
  
  html {
    height: 100%;
  }
  
  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
  }
`

export const Main = () => {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <GlobalStyle />
        <Homepage />
      </ErrorBoundary>
    </React.Fragment>
  )
}
