import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const changeQuery = (e) => {
    setQuery(e.target.value);

  };

  useEffect(() => {
    // API isteği sadece 'query' değiştiğinde yapılacak
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=70fbd66d883d618ac88e2d2fac03119f&language=en-US&page=1&query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        // API yanıtı ile gelen verileri 'searchResults' state'ine kaydet
        setResults(data.results);
      });
  }, [query]); // Sadece 'query' değiştiğinde etkileşime gir
 
  console.log(results);
  return (
    <>
      <div className="container">
        <div className="add-content -mt-5 w-[80%] h-2 mx-auto">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg"
            alt=""
          />
        </div>
        <div className="items flex flex-col justify-items-start justify-start">
          <div className="h11">
            <h1 className="text-white text-5xl">Hoşgeldiniz</h1>
            {query}
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
            placeholder="Film, dizi , kişi ara..."
            className="rounded-xl w-[70%] h-9 mt-12"
          />
        </div>
      </div>
      {/* API yanıtını görüntülemek için bir liste ekleyebilirsiniz */}
      <div className="results">
        <ul>
          {results.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </ul>
  
      </div>
    </>
  );
};

export default Add;
