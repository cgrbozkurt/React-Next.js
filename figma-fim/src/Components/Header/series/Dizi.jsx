import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSeries } from "../../redux/actions";
import { API_KEY } from "../config";
import CardItem from "../../Card/Card";



const Dizi = () => {

const dispatch=useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1&query=example`
        );
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
  
        if (data.results) {
          dispatch(setSeries(data.results));
        }
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    };
  
    fetchData();
  }, [dispatch]);

  const series=useSelector((state)=>state.series)



  return (
    <div>
      <h1 className="ms-12 mt-12 font-bold text-3xl">Popular Series</h1>
        <div className="div grid grid-cols-4 gap-28 mt-16 mx-[47px] ">
        {series.map((product)=><CardItem product={product} key={product.id}/>)}
        </div>
      
    </div>
  )
}

export default Dizi