import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll(event) {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      console.log(scroll)
      if(scroll > height * 0.75 && !wait){
        setPages((pages) => [...pages, pages.length + 1]);
        wait = true
        setTimeout(() => {
          wait = false
        }, 500)
      }
      
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    }

  }, [])

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos key={page} user={user} page={page} setModalPhoto={setModalPhoto}/>
      ))}
    </div>
  )
}

export default Feed