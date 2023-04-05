import Notiflix from 'notiflix';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { resultSearch } from '../api/api';
import { ImageGalleryLi, ImageGalleryEl } from './ImageGallery.styled';
import { Modal } from '../Modal/Modal';
import { Button } from 'components/Button/Button';


export class ImageGallery extends Component {
    state = {
      articles: [],
      page: 1,
      per_page: 12,
      isOpen: false,
      bigImage: '',
    };
  
    async componentDidUpdate(prevProps, prevState) {
      const search = this.props.searchWord;
      // console.log(search);
      const { page, per_page } = this.state;
  
      const options = {
        search: search,
        page: page,
        per_page: per_page,
      };
      if (prevProps.searchWord !== search && search) {
        this.setState({
          articles: [],
          page: 1,
        });
  
        try {
          const response = await resultSearch(options);
          if (response.hits.length === 0) {
            return Notiflix.Notify.info(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
  
          const articles = response.hits;
  
          this.setState({
            articles: articles,
          });
        } catch (error) {
          console.log(error.message);
        }
      }
      if (prevState.page !== page && page !== 1) {
        try {
          const response = await resultSearch(options);
          const articles = [...this.state.articles, ...response.hits];
  
          this.setState({
            articles: articles,
          });
        } catch (error) {
          console.log(error.message);
        }
      }
    }



    openBigImage = img => {
      this.setState({
        bigImage: img,
        isOpen: true,
      });
    };
  
    closeModal = () => {
      this.setState({
        isOpen: false,
      });
    };
  
    loadMorePhotos = () => {
      this.setState(prev => ({
        page: prev.page + 1,
      }));
    };
  
    onButtonVisible = () => {
      if (
        this.state.articles &&
        this.state.articles.length < Number(this.state.page * this.state.per_page)
      ) {
        return false;
      }
      return true;
    };
  
    render() {
      const { articles } = this.state;
      return (
        <>
          <ImageGalleryLi>
            {articles.map(article => (
              <ImageGalleryEl key={article.id}>
                <ImageGalleryItem
                  article={article}
                  handleClick={this.openBigImage}
                />
              </ImageGalleryEl>
            ))}
            {this.state.isOpen && (
              <Modal
                bigImage={this.state.bigImage}
                closeModal={this.closeModal}
              />
            )}
          </ImageGalleryLi>
          {this.onButtonVisible() && (
            <Button onClickButton={this.loadMorePhotos} />
          )}
        </>
      );
    }
  }