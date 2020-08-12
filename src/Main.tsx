import * as React from 'react';
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components';
import { variables } from '@styles/variables.styles';
import { Homepage } from './features/homepage/Homepage';
import { ErrorBoundary } from './shared/error-handlers/errorBoundary/errorBoundary';

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
