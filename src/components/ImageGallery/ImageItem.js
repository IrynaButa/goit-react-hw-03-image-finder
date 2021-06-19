import React from "react";
import defaultImg from './boy-smiling.png';
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";

const ImageItem = ({ webformatURL, onToggleModal, largeImageURL }) => (
  <li  className={styles.ImageGalleryItem}>
        <img src={webformatURL} alt=""
            className={styles.ImageGalleryItemImage}
        onClick={() => onToggleModal(largeImageURL)}/>
            </li>
);

ImageItem.defaultProps = {
	webformatURL: defaultImg,
};

ImageItem.propTypes = {
    
   largeImageURL: PropTypes.string.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};
export default ImageItem;

