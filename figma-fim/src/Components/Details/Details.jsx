// Details.js
import { useParams } from 'react-router-dom';
import VideoPlayer from './Video';

const Details = ({ films }) => {
  const { id } = useParams();
  const selectedFilm = films.find((film) => film.id === parseInt(id));

  if (!selectedFilm) {
    return <div>Film bulunamadı</div>;
  }

  const { title, vote_average, poster_path } = selectedFilm;

  return (
    <div>
      <h1 className="font-bold flex justify-center text-center mt-14 text-4xl mb-12 ">
        {title}
      </h1>
      <VideoPlayer />
      {/* Diğer içerikleri buraya ekleyebilirsiniz */}
      <div className="overview relative flex mt-12 mx-[100px] h-[555px] ">
        {/* ... */}
        <div className="over-text flex flex-col gap-8 mx-auto border-solid border">
          <h1 className="bg-black text-blue-400 flex justify-center text-center text-3xl rounded-3xl h-9 mx-5 mt-5">
            Overview
          </h1>
          <p className="mx-8 text-3xl ">
            {selectedFilm.overview}
          </p>
          {/* ... Diğer içerikler ... */}
        </div>
      </div>
    </div>  
  );
};

export default Details;
