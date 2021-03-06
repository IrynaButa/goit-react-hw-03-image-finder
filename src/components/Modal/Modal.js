import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from "./Modal.module.css";


const modalRoot = document.querySelector('#modal-root');




export default class Modal extends Component {
 componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    

    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
      return createPortal(
          <div className={styles.Overlay } onClick={this.handleBackdropClick}>
              <div className={styles.Modal}>{this.props.children}
                <img src="" alt="" />
            </div>
      </div>,
      modalRoot,
    );
  }   

}

