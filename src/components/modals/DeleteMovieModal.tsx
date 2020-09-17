import React, { FC } from 'react';
import useModal from '../../shared/hooks/useModal';
import Button from '../../shared/components/button/Button';
import ModalWindow from '../../shared/components/modal/ModalWindow';

type DeleteMovieProps = {
  onConfirm?: () => void;
  onClose?: () => void;
}

// TODO: make reusable Alert modal instead of that
const DeleteMovieModal: FC<DeleteMovieProps> = ({ onConfirm = () => {}, onClose = () => {} }) => {
  const {isShowing, toggle} = useModal();

  const handleClose = () => {
    onClose();
    toggle();
  }

  const handleConfirm = () => {
    onConfirm();
    toggle();
  }

  return (
    <React.Fragment>
      <Button
        width='100'
        onClick={toggle}>
        Delete
      </Button>
      <ModalWindow isShowing={isShowing} hide={toggle} title='Delete Movie'>
        <p>Are you sure you want to delete this movie?</p>
        <div className="modal-footer">
          <Button onClick={ handleClose }> Close </Button>
          <Button onClick={ handleConfirm } theme='success'> Confirm </Button>
        </div>
      </ModalWindow>
    </React.Fragment>
  );
}

export default DeleteMovieModal;
