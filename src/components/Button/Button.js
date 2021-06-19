import React from "react";

import Loader from 'react-loader-spinner';
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Button = ({onClick, isLoading }) => (
    <button type="button"
        className={styles.Button}
        onClick={onClick}>
       <Loader
        className={styles.loader}
         type="Bars" color="#00BFFF" height={80} width={80}
        visible={isLoading}
      />
      {isLoading ? '' : 'Load more'}
          </button>
);



Button.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;


 