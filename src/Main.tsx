import * as React from 'react';
import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';
import {variables} from '@styles/variables.styles';
import {ErrorBoundary} from './shared/error-handlers/errorBoundary/errorBoundary';
import Homepage from './features/homepage/Homepage';
import {
  BrowserRouter, Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from './features/not-found-page/NotFound';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
     font-family: 'Northstar';
     src: url('/assets/fonts/NorthstarGradient-BKB3.otf');
  }
  @font-face {
     font-family: 'neon-tubes-2-regular';
     src: url('/assets/fonts/NeonTubes2.otf');
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
`;

export const Main = () => {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Redirect exact from='/' to='/movies' />
            <Route path='/movies'>
              <Homepage/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
    </React.Fragment>
  );
};
