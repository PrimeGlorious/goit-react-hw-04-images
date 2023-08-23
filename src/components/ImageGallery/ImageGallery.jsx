import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export function ImageGallery({ photos, openModal }) {
  return (
    <>
      <ImageGalleryList>
        {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            minImage={webformatURL}
            bigImage={largeImageURL}
            alt={tags}
            openModal={openModal}
          />
        ))}
      </ImageGalleryList>
    </>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired
};
