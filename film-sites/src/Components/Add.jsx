import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { API_KEY } from './config.js';

const Add = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

 
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

    <div className="container">
      <div className="add-content -mt-5 w-[80%] h-2 mx-auto">
        <img className="rounded-b-lg"
          src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg"
          alt=""
        />
      </div>
      <div className="items flex flex-col justify-items-start justify-start">
        <div className="h11">
          <h1 className="text-white text-5xl">Hoşgeldiniz</h1>
        </div>
        <div className="h22">
          <h2 className="text-white text-4xl">
            Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
          </h2>
        </div>
      </div>
      <div className="input-wrapper">
        <input
          onChange={changeQuery}
          type="text"
          value={query}
          placeholder="Film, dizi, kişi ara..."
          className="rounded-xl w-[70%] h-9 mt-12"
        />
      </div>
    
    </div>
    <div className="results w-[80%] flex flex-wrap justify-start bg-orange-300 mx-auto mt-64 p-4 rounded-lg gap-5 ">
      {results.length > 0 ? (
        results.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-36">
          <p className="text-red-500 text-2xl">Arama sonuçları bulunamadı.</p>
        </div>
      )}
    </div>
    </>
  );
};

export default Add;