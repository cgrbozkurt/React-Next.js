import { Link } from "react-router-dom";
import { query,setQuery } from "./utils";
const Header = () => {


  const changeQuery = (e) => {
    setQuery(e.target.value);
  };




  return (
    <>
      <div className="header flex justify-between  text-white mt-8
       w-full h-12 text-center py-3 px-36 mb-5 fixed backdrop-blur-3xl opacity-60 bg-gradient-to-b  ">
        <Link to={"/watchlist"} className="izlenecek ">
          İzlenecekler
        </Link>
        <Link to={"/"}>Ana Sayfa</Link>

        <div className="rightcontent flex justify-between gap-5 ">
          <Link to={"/watched"}>İzlenenler</Link>
          <Link to={"/add"} className="h-8 w-8  bg-blue-400 rounded-lg flex justify-center items-center hover:bg-green-500">
            <i className="fas fa-plus" />
          </Link>
        </div>
        
      </div>
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
    </>
  );
};

export default Header;
