import React, { FC, PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';


type ButtonProps = {
  theme?: string;
  width?: string | number,
  height?: string | number,
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void,
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  font-family: ${variables.fontPrimary};
  border: 1px solid #fff;
  border-radius: 3px;
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  height: ${props => props.height ? `${props.height}px` : 'auto'};
  padding: 6px 10px;
  background: transparent;
  position: relative;
  transition: all .2s;
  ${props => getButtonColor(props.theme)}
`

const getButtonColor = (theme: string) => {
  let color: string;
  switch (theme) {
    case 'solid': {
      color = variables.colorSecondary;
      return `
        color: ${variables.colorBackground};
        background-color: ${color};
        transition: .3s all;
        border: 2px solid transparent;
        font-weight: bold;
        padding: 5px 10px;
        box-shadow: 0px 0px 10px 0px ${color};
        &:hover, &:focus {
          box-shadow: 0px 0px 20px 1px ${color};
        &::before,
        &::after {
          display: none !important;
        }`
    }
    case 'success': {
      color = variables.colorSuccess;
      break;
    }
    case 'danger': {
      color = variables.colorDanger;
      break;
    }
    case 'primary':
    default: {
      color = variables.colorPrimary;
      break;
    }
  }

  return `
   border-color: ${ color };
   color: ${ color };
   box-shadow: 0 0 2px 0 ${ color }, inset 0 0 2px 0 ${ color };
   &::before, &::after {
    content: '';
   };
   &:hover {
      box-shadow: 0 0 7px 0 ${ color }, inset 0 0 7px 0 ${ color };
      text-shadow: 
      0 0 10px #fff,
      0 0 20px #fff,
      0 0 30px ${ color }
   }`
}

const Button: FC<ButtonProps> = (props: PropsWithChildren<ButtonProps>): ReactElement => {
  const { theme, width, height, type = 'button', children, onClick } = props;

  return (
    <StyledButton
      theme={theme}
      width={width}
      height={height}
      type={type}
      onClick={onClick}>
      { children }
    </StyledButton>
  )
};

export default Button;
