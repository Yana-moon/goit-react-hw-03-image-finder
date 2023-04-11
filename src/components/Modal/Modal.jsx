import { Component } from 'react';
import PropTypes from 'prop-types';
import { OverlayWrapper, ModalWrapper } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <OverlayWrapper className="overlay" onClick={this.handleBackdropClick}>
        <ModalWrapper className="modal">
          <img src={this.props.largeImageURL} alt="" />
        </ModalWrapper>
      </OverlayWrapper>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
