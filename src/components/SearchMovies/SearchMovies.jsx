import MoveisList from 'components/MoveisList/MoveisList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesForRequest } from 'service/getRequest';

function SearchMovies() {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [data, setData] = useState([]);

  const searchRequest = searchQuery.get('query');

  useEffect(() => {
    if (searchRequest === null) {
      return;
    }
    fetchMoviesForRequest(searchRequest).then(data =>
      data.length > 0
        ? setData(data)
        : alert(`We don't have any movie with this name`)
    );
  }, [setData]);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchRequest === null) {
      alert('Input movie name');
      return;
    }

    fetchMoviesForRequest(searchRequest).then(data =>
      data.length > 0
        ? setData(data)
        : alert(`We don't have any movie with this name`)
    );
  };

  return (
    <section>
      <form className="{css.SearchForm}" onSubmit={handleSubmit}>
        <button type="submit" className="{css.SearchForm_button}">
          <span className="{css.SearchForm_button__label}">Search</span>
        </button>

        <input
          onChange={evt => setSearchQuery({ query: evt.target.value })}
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
