import React from 'react';
import styled from 'styled-components';
import {variables} from '@styles/variables.styles';

const StyledError = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 24px;
    
    h1 {
      font-size: 31px;
      margin-bottom: 15px;
    }
    
    div {
      padding: 25px;
      border: 1px solid ${ variables.colorSecondary };
      border-radius: 3px;
      text-align: center;
      text-shadow: 
        0 0 5px ${ variables.colorPrimary },
        0 0 10px ${ variables.colorPrimary };
      box-shadow: 
       0 0 35px 5px ${ variables.colorSecondary },
       inset 0 0 7px 0 ${ variables.colorSecondary };
    }
`;

export class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  render(): JSX.Element | React.ReactNode {
    if (this.state.hasError) {
      return (
        <StyledError>
          <div>
            <h1>Oooops...</h1>
            <h2>Something went wrong.</h2>
          </div>
        </StyledError>
      );
    }

    return this.props.children;
  }
}
