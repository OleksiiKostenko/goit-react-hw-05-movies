import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function MoveisList({ data }) {
  const location = useLocation();

  return (
    <ul>
      {data?.map(moveis => (
        <li key={moveis.id}>
          <Link to={`/movies/${moveis.id}`} state={{ from: location }}>
            {moveis.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default MoveisList;
