/* eslint-disable react/prop-types */
const CardItem = ({ product }) => {
  // Eğer product değeri undefined ise, varsayılan bir değer atayabiliriz
  const { title = "No Title", vote_average = 0, poster_path = "" } = product || {};

  return (
    <div className="card relative">
      <div id="top" className="point bg-white text-black w-[42%] ml-auto rounded-t-sm h-7 ">
        {vote_average.toFixed(1)}/10
      </div>
      <div className="image rounded-md">
        <img
          className="rounded-md"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
          alt={title}
        />
      </div>
      <div className="div-foot absolute bottom-0 bg-gray-400 w-full opacity-80
       text-white h-auto flex items-center justify-center rounded-b-md">
        {title}
      </div>
    </div>
  );
};

export default CardItem;
