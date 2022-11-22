import { useState } from 'react';
import NotifyMessages from '../../helpers/Messages/NotifyMessages';
import { SearchForm, SearchInput, SearchBtn } from './Searchbar.styled';

const notify = new NotifyMessages();

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return notify.onNullSearchQuery();
    }

    onSubmit(searchQuery);
    reset();
  };

  const reset = () => {
    setSearchQuery('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Enter your movie"
      />
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
