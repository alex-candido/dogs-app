import React from 'react'
import { PHOTOS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import FeedPhotosItem from './FeedPhotosItem'

const FeedPhotos = () => {

  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() { 
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if(error) return <Error error={error}/>
  if(loading) return <Loading />
  return (
    <div>
      <FeedPhotosItem />
    </div>
  )
}

export default FeedPhotos