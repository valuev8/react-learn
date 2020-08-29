import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { variables } from '@styles/variables.styles';
import ReactDOM from 'react-dom';
import Button from '../button/Button';

type ModalProps = {
  onCloseRequest: () => void;
  title: string;
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

class ModalWindow extends Component<ModalProps> {
  modal: HTMLElement;

  constructor(props: ModalProps) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleKeyUp(e: KeyboardEvent) {
    const { onCloseRequest } = this.props;
    const keys: { [key: string]: any} = {
      '27': () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.code]) {
      keys[e.code]();
    }
  }

  handleOutsideClick(e: Event) {
    const { onCloseRequest } = this.props;

    if (this.modal) {
      if (!this.modal.contains(e.target as Node)) {
        onCloseRequest();
        document.removeEventListener("click", this.handleOutsideClick, false);
      }
    }
  }

  render() {
    const { onCloseRequest, children, title } = this.props;

    return ReactDOM.createPortal(
      <StyledModal>
        <div className={'modal'} ref={node => (this.modal = node)}>
          <button className='modal-close-btn' onClick={onCloseRequest}> X </button>
          <div className='modal-header'> { title }</div>
          <div
            className={'modalContent'}
            onClick={(e) => e.stopPropagation()}>
              { children }
          </div>
          <div className="modal-footer">
            <Button onClick={onCloseRequest}> Close </Button>
            <Button onClick={onCloseRequest} theme='success'> Confirm </Button>
          </div>
        </div>
      </StyledModal>, document.body
    );
  }
}

export default ModalWindow;
