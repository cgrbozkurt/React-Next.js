import { useContext } from "react";
import { GlobalContext } from "./Contex/GlobalState";
import ProductItem from "./ProductItem";

const Watchlist = () => {
  const { watchlist, } = useContext(GlobalContext);
  return (
    <>
        
        <div className="mt-0" >

          <div className="results w-[80%] flex flex-wrap justify-start bg-orange-300 mx-auto mt-12 p-4 rounded-lg gap-5 ">
          {watchlist.map((product) => (
            <ProductItem key={product.title} product={product} />
          ))}
          </div>
        </div>
    </>
  );
};

export default Watchlist;
