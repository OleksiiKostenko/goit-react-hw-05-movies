import MoveisList from 'components/MoveisList/MoveisList';
import React, { useState } from 'react';
import { fetchMoviesForRequest } from 'service/getRequest';

function SearchMovies() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const handleInputChange = evt => {
    const { value } = evt.target;
    setQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    fetchMoviesForRequest(query).then(data =>
      data.length > 0
        ? setData(data)
        : alert(`We don't have any movie with this name`)
    );
    reset();
  };
  const reset = () => {
    setQuery('');
  };

  return (
    <section>
      <form className="{css.SearchForm}" onSubmit={handleSubmit}>
        <button type="submit" className="{css.SearchForm_button}">
          <span className="{css.SearchForm_button__label}">Search</span>
        </button>

        <input
          onChange={handleInputChange}
          value={query}
          name="query"
          className="{css.SearchForm_input}"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      {data && <MoveisList data={data} />}
    </section>
  );
}

export default SearchMovies;
