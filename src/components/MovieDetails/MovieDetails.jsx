import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieForId } from 'service/getRequest';

function MovieDetails() {
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovieForId(movieId).then(data => setData(data));
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    data;

  return (
    <div>
      {poster_path && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            alt={title}
          />
          <h2>
            {title}({release_date.slice(0, 4)})
          </h2>
          <p>User score:{(vote_average * 10).toFixed() + '%'}</p>
          <h3>Overview:</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <Link to="cast">cast</Link>
          <Link to="reviews">reviews</Link>
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
