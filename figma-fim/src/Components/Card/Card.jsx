import {Link, useNavigate } from 'react-router-dom';


/* eslint-disable react/prop-types */
const CardItem = ({ product,bg,gg }) => {
  // Eğer product değeri undefined ise, varsayılan bir değer atayabiliriz
  const { title = "No Title", vote_average = 0, poster_path = "" } = product || {};
  


  return (
    
   <Link to={`/details/${id}`}>
    <div   className="card relative">
      {vote_average?(<div id="top" className={`point  w-[42%] ml-auto ${gg} ${bg} rounded-t-md h-8 flex justify-center text-center font-bold `}>
        {vote_average.toFixed(1)}/10
      </div>):(<div id="top" className={`point  w-[42%] ml-auto ${gg} ${bg} rounded-t-md h-8 flex justify-center text-center font-bold `}>
      Oylanmamış
      </div>)}
      <div className="image rounded-b-md rounded-tl-md">
        {poster_path?(<img
          className="rounded-b-md rounded-tl-md"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
          alt={title}
        />):(
          <img
          className="rounded-b-md"
          src="https://image.tmdb.org/t/p/w220_and_h330_face//5658YScD3G7ZsbXQmVOYkSYSMDX.jpg" alt="" />
        )}
      </div>
      <div className="div-foot min-h-[68px] absolute bottom-0 bg-purple-950 w-full opacity-70
       text-white h-auto flex items-center justify-center rounded-b-md ">
        {title}
      </div>
  

    </div>
   </Link>
  );
};

export default CardItem;
