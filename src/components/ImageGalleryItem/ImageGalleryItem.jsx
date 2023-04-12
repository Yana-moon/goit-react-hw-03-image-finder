import PropTypes from 'prop-types';
import { ImageGalleryItemWrapper, ImageGalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ picture, handleClick }) => {
  return (
    <ImageGalleryItemWrapper>
      <ImageGalleryImage src={picture.webformatURL} alt={picture.tags}
        onClick={() => handleClick(picture.largeImageURL)}
      />
    </ImageGalleryItemWrapper>
  );
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};