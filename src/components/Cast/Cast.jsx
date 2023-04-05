import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieForIdAndParams } from 'service/getRequest';

function Cast() {
  const { movieId } = useParams();
  const params = 'credits';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovieForIdAndParams(movieId, params).then(data => setData(data.cast));
  }, [movieId, params]);

  return (
    <div>
      <ul>
        {data.map(({ name, character, profile_path, id }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                alt={name}
              />
            )}
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
