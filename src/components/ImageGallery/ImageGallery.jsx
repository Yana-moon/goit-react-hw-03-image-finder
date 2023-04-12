//import { Component } from 'react';

import PropTypes from 'prop-types';


import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryWrapper  } from './ImageGallery.styled';

//const API_KEY = '33912044-22b2651672bec86fc9e274e80';
//const API_URL = 'https://pixabay.com/api/'; 


export const ImageGallery = ({ pictures, onBigImg }) => {
  return (
    <GalleryWrapper>
      {pictures.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          picture={picture}
          handleClick={onBigImg}
        />
      ))}
    </GalleryWrapper>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onBigImg: PropTypes.func.isRequired,
};

  