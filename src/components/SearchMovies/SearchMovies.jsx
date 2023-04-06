import MoveisList from 'components/MoveisList/MoveisList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesForRequest } from 'service/getRequest';
import css from './SearchMovies.module.css';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <>
      <div className={css.form_wrapp}>
        <form className={css.search_form} onSubmit={handleSubmit}>
          <button type="submit" className={css.search_form__btn}>
            Search
          </button>

          <input
            onChange={evt => setSearchQuery({ query: evt.target.value })}
            name="query"
            className={css.form_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </form>
      </div>
      {data.length === 0 ? (
        <></>
      ) : (
        <div className={css.list_wrapp}>
          <MoveisList data={data} />
        </div>
      )}
    </>
  );
}

export default SearchMovies;
