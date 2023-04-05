import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieForIdAndParams } from 'service/getRequest';

function Reviews() {
  const { movieId } = useParams();
  const [params, setParams] = useState('reviews');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovieForIdAndParams(movieId, params).then(data =>
      setData(data.results)
    );
  }, [movieId, params]);

  return (
    <div>
      {data.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {data.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author:{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
