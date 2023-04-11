import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppWrapper } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = ({ name }) => {
    this.setState({
      searchQuery: name,
    });
  };

  render() {
    return (
      <AppWrapper>
        <ToastContainer autoClose={2500} />
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery pictureFindName={this.state.pictureName} />
      </AppWrapper>
    );
  }
}
