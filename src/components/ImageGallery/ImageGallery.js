import React, { Component} from "react";

//import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import fetchImages from '../../service/ImgApi';
import ImageItem from "./ImageItem";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";


class ImageGallery extends Component {
    state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
      isLoading: false,
      showModal: false,
      largeImageURL: null,
    }
componentDidUpdate(prevProps, prevState) {
     if (prevProps.query !== this.props.query) {
      this.setState({ currentPage: 1, images: [], error: null }, () =>
        this.fetchImg(),
      );
  }
  if (prevState.currentPage !== this.state.currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImg = () => {
    const { currentPage } = this.state;
    const { query } = this.props;

    const options = {
      query,
      currentPage,
    };

    this.setState({ isLoading: true });

    
      fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };


toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  
  };
  handleModalImage = url => {
    this.toggleModal();
    this.setState({ largeImageURL: url });
  };

  render() {
    const { images, isLoading, error, showModal, largeImageURL, } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0;

    return (
      <>
        {error && <h1>Sorry...We are doing our best</h1>}
        <ul className={ styles.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => (

            <ImageItem
              key={id}
              webformatURL={webformatURL}
              onToggleModal={this.handleModalImage}
              largeImageURL={largeImageURL}
            />
          ))}
        </ul>

        {/* {isLoading && <h1>Loading...</h1>} */}

        {shouldRenderLoadMoreButton && (
           <Button onClick={this.fetchImg} isLoading={isLoading} />
         
          
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
