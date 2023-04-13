import { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppWrapper } from './App.styled';
import { resultSearch } from './Api/Api';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    searchName: '',
    pictures: [],
    currentPage: 1,
    per_page: 12,
    isOpen: false,
    largeImage: '',
    isLoading: false,
  };

  async componentDidUpdate (_prevProps, prevState) {
    const options = {
      searchName: this.state.searchName,
      currentPage: this.state.currentPage,
    };
    if (
      prevState.searchName !== this.state.searchName &&
      this.state.searchName
    ) {
      try {
        const response = await resultSearch(options);
        const arr = response.hits.map(el => ({
          tags: el.tags,
          webformatURL: el.webformatURL,
          largeImageURL: el.largeImageURL,
          id: el.id,
        }));

        if (arr && arr.length > 0) {
          this.setState({
            pictures: arr,
            isLoading: false,
          });
        }
        if (arr.length === 0) {
          this.setState({
            isLoading: false,
          });
          return toast.error(
            `Sorry, we didn't find picture including such name. Please try again.`,
          );
        }
      } catch (error) {
        this.setState({
          isLoading: false,
        });
        toast.error(
          'Sorry, something wrong. Try again later', error);
      }
    }


    if (prevState.currentPage !== this.state.currentPage && this.state.currentPage !== 1) {
      try {
        const response = await resultSearch(options);
        const arr = response.hits.map(el => ({
          tags: el.tags,
          webformatURL: el.webformatURL,
          largeImageURL: el.largeImageURL,
          id: el.id,
        }));
        this.setState({
          pictures: [...this.state.pictures, ...arr],
          isLoading: false,
        });
      } catch (error) {
        this.setState({
          isLoading: false,
        });
        return toast.warn(
          'Sorry, something went wrong, please try again later', error
        );
      }
    }
  }

  handleSubmit = ({ name }) => {
    if (name !== this.state.searchName && name) {
      this.setState({
        searchName: name,
        currentPage: 1,
        pictures: [],
        isLoading: true,
      });
    }
  };

  handleBigImg = img => {
    this.setState({
      largeImage: img,
      isOpen: true,
    });
  };

  onClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  loadMoreCards = () => {
    this.setState(prev => ({
      currentPage: prev.currentPage + 1,
      isLoading: true,
    }));
  };

  onButtonVisible = () => {
    if (
      this.state.pictures &&
      this.state.pictures.length < Number(this.state.currentPage * this.state.per_page)
    ) {
      return false;
    } else return true;
  };

  render() {
    return (
      <AppWrapper>
        <ToastContainer autoClose={2500} />
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery pictures={this.state.pictures}
        onBigImg={this.handleBigImg} />
                {this.state.isOpen && (
          <Modal largeImage={this.state.largeImage} onClose={this.onClose} />
        )}
        {this.onButtonVisible() && (
          <Button onClickButton={this.loadMoreCards} />
        )}
        {this.state.isLoading && <Loader />}
      </AppWrapper>
    );
  }
}

