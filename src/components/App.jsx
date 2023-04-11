import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppWrapper } from './App.styled';

export class App extends Component {
  state = {
    searchName: '',
  };

  handleSubmit = searchName => {
    this.setState({searchName});
  };

  render() {
    return (
      <AppWrapper>
        <ToastContainer autoClose={2500} />
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery picFindName={this.state.searchName} />
      </AppWrapper>
    );
  }
}
