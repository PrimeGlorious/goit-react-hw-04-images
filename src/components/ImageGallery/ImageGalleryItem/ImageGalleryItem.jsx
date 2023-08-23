import PropTypes from 'prop-types';
import { ImageGalleryCard, ImageGalleryCardPic } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ minImage, bigImage, alt, openModal }) {
  return (
    <ImageGalleryCard
      onClick={evt => {
        openModal(evt.currentTarget.dataset.src);
      }}
      data-src={bigImage}
    >
      <ImageGalleryCardPic src={minImage} alt={alt} />
    </ImageGalleryCard>
  );
}


ImageGalleryItem.propTypes = {
  minImage: PropTypes.string.isRequired,
  bigImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
