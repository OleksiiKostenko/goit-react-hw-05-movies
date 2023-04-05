import MoveisList from 'components/MoveisList/MoveisList';
import React, { useEffect, useState } from 'react';
import { fetchTrending } from 'service/getRequest';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTrending().then(data => setData(data));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoveisList data={data} />
    </>
  );
}

export default Home;
