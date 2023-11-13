/* eslint-disable react/prop-types */

const CardItem = ({ product }) => {
  return (
    <div className="card w-[113px] h-[174px]  bg-red-500 mx-5">
      {product ? (
        <div className="relative h-[170px] w-[113px]  " >
          <div
            id="top"
            className="point bg-white text-black w-[42%] ml-auto rounded-t-sm h-7 "
          >
            8.5/10
          </div>
          <div className="image rounded-md">
            <img
              className="rounded-md h-[170px] w-[113px]"
              src={`https://image.tmdb.org/t/p/w220_and_h330_face/${product.poster_path}`}
              alt={product.title}
            />
          </div>
          <div className="div-foot absolute bottom-0 bg-gray-400 w-full opacity-80 text-white h-20 flex items-center justify-center rounded-b-md">
            {product.title}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardItem;
