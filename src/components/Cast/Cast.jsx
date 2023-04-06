import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieForIdAndParams } from 'service/getRequest';
import css from './Cast.module.css';
import img from 'no_photo.jpg';

function Cast() {
  const { movieId } = useParams();
  const params = 'credits';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovieForIdAndParams(movieId, params).then(data => setData(data.cast));
  }, [movieId, params]);
  console.log('object :>> ', data);
  return (
    <div className={css.cast_wrapp}>
      {data.length === 0 ? (
        <p className={css.text_not__found}>
          We don't have any cast for this movie
        </p>
      ) : (
        <ul className={css.cast_list}>
          {data.map(({ name, character, profile_path, id }) => (
            <li className={css.cast_item} key={id}>
              {profile_path === null ? (
                <div className={css.img_block}>
                  <img className={css.img} src={img} alt="" />
                </div>
              ) : (
                <img
                  className={css.cast_img}
                  src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                  alt={name}
                />
              )}
              <h3 className={css.title}>{name}</h3>
              <p className={css.text}>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;
