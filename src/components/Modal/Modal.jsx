import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent } from './Modal.styled';

export const Modal = ({ closeModal, currentImg }) => {
  useEffect(() => {
    const onEscClose = e => {
      if (e.code !== 'Escape') {
        return;
      }

      closeModal();
    };

    window.addEventListener('keydown', onEscClose);

    return () => window.removeEventListener('keydown', onEscClose);
  }, [closeModal]);

    return (
      <ModalBackdrop
        onClick={e => {
          if (e.currentTarget === e.target) {
            closeModal();
          }
        }}
      >
        <ModalContent>
          <img src={currentImg} alt="" />
        </ModalContent>
      </ModalBackdrop>
    );
};

Modal.propTypes = {
  currentImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
