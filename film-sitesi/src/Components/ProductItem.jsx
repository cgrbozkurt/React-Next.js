const ProductItem = ({ product }) => {
    return (
     <>
      <div className="container w-64 max-w-sm h-[500px] rounded overflow-hidden shadow-lg flex flex-col bg-gray-200 justify-between  ">
       {product.poster_path?(
         <img
         className="w-full h-[250px] "
         src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
         alt={product.title}
       />
       ):(
       <img          className="w-full h-80"
       src="data:image/jpeg;base64,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" alt="" />
       )
      }
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
         {product.release_date?product.release_date.substring(0,4):"Bilinmiyor"
         }
        </div>
        <p>
          {product.vote_average
            ? `Ortalama Oy: ${product.vote_average.toFixed(1)}`
            : "Oylanmamış"}
        </p>      
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold bottom-2 py-2 px-4 rounded-full">
  Add To Watchlist
</button>
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold bottom-2 py-2 px-4 rounded-full">
  Add To Watched
</button>
        </div>

      </>
    );
  };
  
  export default ProductItem;