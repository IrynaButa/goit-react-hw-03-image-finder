import React, { Component } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";


class App extends Component {
  state = {
    query: ''
  };

  
  handleSubmitSearchbar = (query) => {
    this.setState({ query });
  };
// onChangeQuery = query => {
//     this.setState({
//       searchQuery: query,
//       currentPage: 1,
//       images: [],
//       error: null,
//     });
//   };
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