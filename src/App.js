import React, { Component } from "react";
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";


class App extends Component {
  state = {
    query: ''
  };

  
  handleSubmitSearchbar = (query) => {
    this.setState({ query });
  };
  render() {
    return (
       <>
        <SearchBar onSubmit={this.handleSubmitSearchbar} />
        <ImageGallery query={this.state.query} />
      </>
    );
  }
}

export default App;