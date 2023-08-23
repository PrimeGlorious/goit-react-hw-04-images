import { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchbarHeader, SearchForm, SearchButton, SearchButtonLabel, SearchInput } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onInputValue = evt => {
    const inputValue = evt.target.value;
    this.setState({ inputValue });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const formValue = evt.target.elements.search.value;
    if (this.state.inputValue.trim() === '') {
      return;
    }

    this.props.onSubmit(formValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <SearchInput
            value={inputValue}
            onChange={this.onInputValue}
            name="search"
            type="text"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export { Searchbar };

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
