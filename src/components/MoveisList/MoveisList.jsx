import { Link } from 'react-router-dom';
import React from 'react';

function MoveisList({ data }) {
  return (
    <ul>
      {data?.map(moveis => (
        <li key={moveis.id}>
          <Link to={`/movies/${moveis.id}`}>{moveis.title}</Link>
        </li>
      ))}
    </ul>
  );
}
export default MoveisList;
