import { useState, useEffect } from 'react';
import { fetchImageApi } from 'api/ImageApi/ImageApi';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { AppImageSection } from "./App.styled";

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [currentImg, setCurrentImg] = useState(null);

  useEffect(() => {
    if (inputValue !== '') {
      setIsLoading(true);
      fetchImageApi(inputValue, page)
        .then(res => {
          setPhotos(prevPhotos => [...prevPhotos, ...res]);
          setIsLoading(false);
        })
        .catch(error => console.log(error.message));
    }
  }, [inputValue, page]);

  const openModal = data => {
    setCurrentImg(data);
  };

  const closeModal = () => {
    setCurrentImg(null);
  };

  const setInput = inputValue => {
    setInputValue(inputValue);
    setPage(1);
    setPhotos([]);
  };

  const loadMore = () => {
    setPage(() => page + 1);
  };

  return (
    <AppImageSection>
      <Searchbar onSubmit={setInput} />

      {photos.length !== 0 && (
        <>
          <ImageGallery photos={photos} openModal={openModal} />
          <Button
            text="Load more"
            isLoading={isLoading}
            loadMore={loadMore}
          />
        </>
      )}
      {isLoading && <Loader />}

      {currentImg && (
        <Modal closeModal={closeModal} currentImg={currentImg} />
      )}
    </AppImageSection>
  );
};
