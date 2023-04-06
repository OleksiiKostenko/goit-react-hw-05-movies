import SearchMovies from 'components/SearchMovies/SearchMovies';
import React from 'react';
import css from './Page.module.css';

function Movies() {
  return (
    <>
      <div className={css.title_wrapp}>
        <h1 className={css.title}>Movies</h1>
      </div>
      <SearchMovies></SearchMovies>
    </>
  );
}

export default Movies;
