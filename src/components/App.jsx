import { Component } from "react"
import { fetchImageApi } from 'api/ImageApi/ImageApi';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { AppImageSection } from "./App.styled";

export class App extends Component {
  state = {
    inputValue: '',
    isLoading: false,
    page: 1,
    photos: [],
    currentImg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, inputValue } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.setState({ isLoading: true });

      fetchImageApi(this.state.inputValue, page)
        .then(res => {
          this.setState(prevState => {
            return { photos: [...prevState.photos, ...res], isLoading: false };
          });
        })
        .catch(error => console.log(error.message));
    }
  }

  openModal = data => {
    this.setState({ currentImg: data });
  };

  closeModal = () => {
    this.setState({ currentImg: null });
  };

  setInputValue = inputValue => {
    this.setState({ inputValue, page: 1, photos: [] });
  };

  loadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { isLoading, photos, currentImg } = this.state;

    return (
      <AppImageSection>
        <Searchbar onSubmit={this.setInputValue} />

        {photos.length !== 0 && (
          <>
            <ImageGallery photos={photos} openModal={this.openModal} />
            <Button
              text="Load more"
              isLoading={isLoading}
              loadMore={this.loadMore}
            />
          </>
        )}
        {isLoading && <Loader />}

        {currentImg && (
          <Modal closeModal={this.closeModal} currentImg={currentImg} />
        )}
      </AppImageSection>
    );
  }
};
