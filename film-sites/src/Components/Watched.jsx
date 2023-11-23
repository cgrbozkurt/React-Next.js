import { useContext } from "react";
import { GlobalContext } from "./Contex/GlobalState";
import ProductItem from "./ProductItem";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div>
      <div className="watched">
      {watched.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Watched;
