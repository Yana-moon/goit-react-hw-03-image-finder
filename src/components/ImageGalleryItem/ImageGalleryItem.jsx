import PropTypes from 'prop-types';
import { ImageGalleryItemWrapper, ImageGalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ article, handleClick }) => {
  return (
    <ImageGalleryItemWrapper>
      <ImageGalleryImage
        src={article.webformatURL}
        alt={article.tags}
        onClick={() => handleClick(article.largeImageURL)}
      />
    </ImageGalleryItemWrapper>
  );
};

ImageGalleryItem.propTypes = {
  article: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};