import React, { Component} from "react";

//import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import fetchImages from '../../service/ImgApi';

// import Button from "./components/Button/Button";
// import Loader from "./components/Loader/Loader";
// import Modal from "./components/Modal/Modal";

class ImageGallery extends Component {
    state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false
    }
componentDidUpdate(prevProps, prevState) {
     if (prevProps.query !== this.props.query) {
      this.setState({ currentPage: 1, images: [], error: null }, () =>
        this.fetchImg(),
      );
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

  render() {
    const { images, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div>
        {error && <h1>Sorry...We are doing our best</h1>}
        <ul className={ styles.ImageGallery}>
          {images.map(({ id, webformatURL }) => (
            <li key={id} className={styles.ImageGalleryItem}>
              <img src={webformatURL} alt="" className="ImageGalleryItem-image"/>
            </li>
          ))}
        </ul>

        {isLoading && <h1>Loading...</h1>}

        {shouldRenderLoadMoreButton && (
          <button type="button" onClick={this.fetchImg}>
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default ImageGallery;

// const ImageGallery = ({ contacts, onDeleteContact, id }) => (
//   <ul className={styles.formContacts}>
//     {contacts.map((contact) => (
//       <li key={contact.id}>
//         <Phone width="30" height="20" />
//         {contact.name}
//         {" : "}
//         {contact.number}
//         <IconButton
//           onClick={() => onDeleteContact(contact.id)}
//           title="delete"
//           aria-label="Delete tag"
//         >
//           <Delete width="20" height="20" />
//         </IconButton>
//       </li>
//     ))}
//   </ul>
// );

// Contacts.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
// export default Contacts;