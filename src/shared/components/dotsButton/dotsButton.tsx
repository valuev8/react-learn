import React, {SyntheticEvent} from 'react';
import styled from 'styled-components';
import {variables} from '@styles/variables.styles';

const StyledDotsButton = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: ${variables.colorBackground};
  border: 1px solid ${variables.colorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: .2s;
  &:hover {
    box-shadow: 0 0 7px 0 ${ variables.colorPrimary };
  }
  span {
    width: 4px;
    height: 4px;
    background: ${variables.colorPrimary};
    border-radius: 50%;
    &::before, &::after {
      content: '';
      width: 4px;
      height: 4px;
      background: ${variables.colorPrimary};
      position: absolute;
      border-radius: 50%;
      left: 50%;
      transform: translateX(-2px);
    }
    
    &::before {
      top: 5px;
    }
    
    &::after {
      bottom: 5px;
    }
  }
`;

type DotsButtonProps = {
  onClick: (e: SyntheticEvent) => void;
};

const DotsButton = ({onClick}: DotsButtonProps) => (
  <StyledDotsButton className="dots-btn" onClick={onClick}>
    <span aria-label="dot" />
  </StyledDotsButton>
);

export default DotsButton;
