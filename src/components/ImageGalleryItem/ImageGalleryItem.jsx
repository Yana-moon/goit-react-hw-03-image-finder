import PropTypes from 'prop-types';
import { ImageGalleryItemWrapper, ImageGalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, id }) => {
  return (
    <ImageGalleryItemWrapper>
      <ImageGalleryImage src={webformatURL} id={id} alt=""
      />
    </ImageGalleryItemWrapper>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
};