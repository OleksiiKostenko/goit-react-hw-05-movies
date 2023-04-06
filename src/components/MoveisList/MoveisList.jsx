import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import css from './MoviesList.module.css';

function MoveisList({ data }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {data?.map(moveis => (
        <li className={css.list_link} key={moveis.id}>
          <Link
            className={css.link}
            to={`/movies/${moveis.id}`}
            state={{ from: location }}
          >
            {moveis.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default MoveisList;

MoveisList.propTypes = { data: PropTypes.array.isRequired };
