import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieForId } from 'service/getRequest';
import css from './MovieDetails.module.css';

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
    <section>
      <Link className={css.back_link} to={backLinkLocation.current}>
        Go back
      </Link>
      {overview && (
        <div>
          <div className={css.section}>
            <div className={css.img_wrap}>
              {!poster_path ? (
                <p>Not have Poster</p>
              ) : (
                <img
                  className={css.img_poster}
                  src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
                  alt={title}
                />
              )}
            </div>
            <div className={css.info_wrapp}>
              <h2>
                {title} ( {release_date.slice(0, 4)} )
              </h2>
              <p>User score: {(vote_average * 10).toFixed() + '%'}</p>
              <h3>Overview:</h3>
              <p className={css.text}>{overview}</p>
              <h4>Genres</h4>
              {genres.length === 0 ? (
                <p>Not have Genres</p>
              ) : (
                <ul className={css.list}>
                  {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className={css.link_wrapp}>
            <Link className={css.back_link} to="cast">
              Cast
            </Link>
            <Link className={css.back_link} to="reviews">
              Reviews
            </Link>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </section>
  );
}

export default MovieDetails;
