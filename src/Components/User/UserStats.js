import React from 'react'
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head'

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
     async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
     }

  }, [request]);

  return (
    <div>
      <Head title="Estatísticas" />
      Estatisticas
    </div>
  )
}

export default UserStats