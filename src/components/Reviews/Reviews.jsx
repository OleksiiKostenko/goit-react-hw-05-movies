import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieForIdAndParams } from 'service/getRequest';
import css from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const params = 'reviews';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovieForIdAndParams(movieId, params).then(data =>
      setData(data.results)
    );
  }, [movieId, params]);

  return (
    <div className={css.reviews_wrapp}>
      {data.length === 0 ? (
        <p className={css.text_not__found}>
          We don't have any reviews for this movie
        </p>
      ) : (
        <ul className={css.list}>
          {data.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
