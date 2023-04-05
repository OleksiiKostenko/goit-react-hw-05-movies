import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieForId } from 'service/getRequest';

function MovieDetails() {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    fetchMovieForId(movieId).then(data => setData(data));
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    data;

  return (
    <div>
      <NavLink to={backLinkLocation.current}>Go back</NavLink>
      {overview && (
        <div>
          {!poster_path ? (
            <p>Not have Poster</p>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              alt={title}
            />
          )}
          <h2>
            {title}({release_date.slice(0, 4)})
          </h2>
          <p>User score:{(vote_average * 10).toFixed() + '%'}</p>
          <h3>Overview:</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          {genres.length === 0 ? (
            <p>Not have Genres</p>
          ) : (
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          )}
          <Link to="cast">cast</Link>
          <Link to="reviews">reviews</Link>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
