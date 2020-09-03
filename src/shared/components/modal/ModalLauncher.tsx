import React, { FC } from 'react';
import ModalWindow from './ModalWindow';
import Button from '../button/Button';
import { createGlobalStyle } from 'styled-components';
import useModal from '../../hooks/useModal';

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

const ModalLauncher: FC<ModalLauncherProps> = (props) => {
  const {theme, width, height, label, modalHeader, children} = props;
  const {isShowing, toggle} = useModal();

  return (
    <React.Fragment>
      <GlobalStyle modalOpen={isShowing} />
      <Button
        theme={theme}
        width={width}
        height={height}
        onClick={toggle}>
        { label }
      </Button>
      <ModalWindow isShowing={isShowing} hide={toggle} title={modalHeader}>
        {children}
      </ModalWindow>
    </React.Fragment>
  );
}

export default ModalLauncher;
