import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { API_KEY } from './config.js';
import { query } from "./utils.js";

const Add = () => {
  const [results, setResults] = useState([]);

 
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.results) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      })
      .catch((error) => {
        console.error("API isteği sırasında bir hata oluştu:", error);
      });
  }, [query]);

  return (
    
<>

      <div className="results w-[80%] flex flex-wrap justify-between bg-gray-100 mx-auto mt-12 p-4 rounded-lg">
      {results.length > 0 ? (
        results.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-36">
          <p className="text-red-500 text-2xl">Arama sonuçları bulunamadı.</p>
        </div>
      )}
    </div></>
  );
};

export default Add;