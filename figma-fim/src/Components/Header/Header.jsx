import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { API_KEY } from "./config";
import Movies from "./Movies";
import Series from "./Series";

const Header = () => {
  const [results, setResults] = useState([]);
  const bg="bg-white text-black"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=example`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.results) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };

    fetchData();
  }, [API_KEY]);


  return (
    <>
      <header>
        <div className="img  top-0 w-full relative">
          <img
            className="w-full"
            src="https://vitalen-ersenozturk.netlify.app/static/media/cinemaSeats2.53f35828a30dddc1c879.png"
            alt=""
          />
          <div className="absolute bottom-0 flex justify-between w-[93%] mb-7 mx-11 ">
            <Card  bg={bg}/>
            <div className="flex flex-col  items-center justify-start">
              <p className="text-white text-2xl">Welcome to the</p>
              <p className="text-white text-2xl font-bold">
                World of TV Series & Movies
              </p>
            </div>
            <Card bg={bg} />
          </div>
        </div>
      </header>

<Movies movies={results}/>     
<Series/>
    </>
  );
};

export default Header;
