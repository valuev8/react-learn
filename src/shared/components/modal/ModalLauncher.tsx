import React, { Component } from 'react';
import ModalWindow from './ModalWindow';
import Button from '../button/Button';
import { createGlobalStyle } from 'styled-components';

type ModalLauncherProps = {
  theme?: string;
  width?: string | number,
  height?: string | number,
  label: string;
  modalHeader: string;
}

const GlobalStyle = createGlobalStyle`
 ${(props: { modalOpen: boolean }) => (props.modalOpen 
    ? `body { overflow: hidden; padding-right: 20px; }`
    : null
)}`

class ModalLauncher extends Component<ModalLauncherProps, { showModal: boolean }> {
  constructor(props: ModalLauncherProps) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { children, label, height, width, theme, modalHeader } = this.props;
    const { showModal } = this.state;

    return (
      <React.Fragment>
        <GlobalStyle modalOpen={showModal} />
        <Button
          theme={theme}
          width={width}
          height={height}
          onClick={() => this.handleToggleModal()}
        >
          { label }
        </Button>

        {showModal && (
          <ModalWindow onCloseRequest={() => this.handleToggleModal()} title={modalHeader}>
            {children}
          </ModalWindow>
        )}
      </React.Fragment>
    );
  }
}

export default ModalLauncher;
