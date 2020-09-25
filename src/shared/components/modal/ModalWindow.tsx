import React, { FC, ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { variables } from '@styles/variables.styles';
import ReactDOM from 'react-dom';
import { ClickAwayListener } from '@material-ui/core';

const GlobalStyle = createGlobalStyle`
 ${(props: { modalOpen: boolean }) => (props.modalOpen
    ? `body { overflow: hidden; padding-right: 20px; }`
    : null
)}`

type ModalProps = {
  title: string;
  isShowing: boolean;
  hide: () => void;
  children: ReactNode;
};

const StyledModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    opacity: 1;
    animation: show .5s ease;
    overflow-x: hidden;
    overflow-y: auto;
    
    .modal {
      min-width: 40%;
      border: 1px solid ${variables.colorPrimary};
      border-radius: 3px;
      background: ${variables.colorBackground};
      padding: 20px;
      position: relative;
      box-shadow: 0 0 10px 0 ${variables.colorPrimary};
    }
    
    .modal-close-btn {
      position: absolute;
      top: 5px;
      right: 5px;
      background: transparent;
      cursor: pointer;
      border: none;
      box-shadow: none;
      color: ${variables.colorSecondary};
    }
    
    .modal-header {
      font-size: 21px;
      margin: 15px 0;
    }
    
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      button {
        margin-left: 20px;
      }
    }
`

const ModalWindow: FC<ModalProps> = ({ isShowing, hide, title, children }) => {
  return isShowing ? ReactDOM.createPortal(
    <StyledModal>
      <GlobalStyle modalOpen={isShowing} />
      <ClickAwayListener onClickAway={hide} mouseEvent='onMouseDown'>
        <div className='modal'>
          <button className='modal-close-btn' onClick={ hide }> X</button>
          <div className='modal-header'> { title }</div>
          <div className={ 'modalContent' }>
            { children }
          </div>
        </div>
      </ClickAwayListener>
    </StyledModal>, document.body
    ) : null;
}

export default ModalWindow;
