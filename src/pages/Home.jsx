import MoveisList from 'components/MoveisList/MoveisList';
import React, { useEffect, useState } from 'react';
import { fetchTrending } from 'service/getRequest';
import css from './Page.module.css';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTrending().then(data => setData(data));
  }, []);

  return (
    <>
      <div className={css.title_wrapp}>
        <h1 className={css.title}>Trending today</h1>
      </div>
      <div className={css.list_wrapp}>
        <MoveisList data={data} />
      </div>
    </>
  );
}

export default Home;
