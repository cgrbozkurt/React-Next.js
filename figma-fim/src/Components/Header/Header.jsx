import { useEffect } from "react";
import Movies from "./Movies";
import { setMovies } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY } from "./config";
import CardItem from "../Card/Card";
import Dizi from "./series/dizi";
const Header = () => {

  const bg = "bg-white text-black";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&query=example`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.results) {
          dispatch(setMovies(data.results));
        }
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };

    fetchData();
  }, [dispatch]);

 

  const movies = useSelector((state) => state.movies);
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  const series=useSelector((state)=>state.series)
  const randomSeries= series[Math.floor(Math.random() * series.length)];


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
            <CardItem product={randomMovie} bg={bg} />
            <div className="flex flex-col  items-center justify-start">
              <p className="text-white text-2xl">Welcome to the</p>
              <p className="text-white text-2xl font-bold">
                World of TV Series & Movies
              </p>
            </div>
            
              <CardItem product={randomSeries} bg={bg} />
           
          </div>
        </div>
      </header>

      <Movies />
      <Dizi />
      
      
    </>
  );
};

export default Header;
