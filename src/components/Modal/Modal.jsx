import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClose);
  };

  onEscapeClose = evt => {
    if (evt.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClose);
  };

  render() {
    const { currentImg, closeModal } = this.props;
    return (
      <ModalBackdrop
        onClick={evt => {
          if (evt.currentTarget === evt.target) {
            closeModal();
          }
        }}
      >
        <ModalContent>
          <img src={currentImg} alt="" />
        </ModalContent>
      </ModalBackdrop>
    );
  }
};

Modal.propTypes = {
  currentImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
