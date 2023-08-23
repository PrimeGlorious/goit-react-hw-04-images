import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchbarHeader, SearchForm, SearchButton, SearchButtonLabel, SearchInput } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputValue = e => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const formValue = e.target.elements.search.value;
    if (inputValue.trim() === '') {
      return;
    }

    onSubmit(formValue);
    setInputValue('');
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <SearchInput
          value={inputValue}
          onChange={onInputValue}
          name="search"
          type="text"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
