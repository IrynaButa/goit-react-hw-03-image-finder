import React, { Component} from "react";
//import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";
//import className from 'classnames'

class SearchBar extends Component {
    state = {
        query: ''
    }

    handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
      this.setState({ query: '' });
      
    };
    
    
    render() {
        return (
 <header className={styles.Searchbar}>
  <form  onSubmit={this.handleSubmit} className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
                placeholder="Search images and photos"
                onChange={this.handleChange}
    />
  </form>
</header>
        )
    }


}





export default SearchBar;