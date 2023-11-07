const ProductItem = ({ product }) => {
    return (
     <>
      <div className="container w-64 max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-80"
          src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
          alt={product.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">{product.release_date}</p>
        </div>
      </div>
      </>
    );
  };
  
  export default ProductItem;