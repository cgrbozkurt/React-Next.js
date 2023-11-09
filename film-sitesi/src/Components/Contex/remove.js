import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
Şimdi, "Remove" sayfasını güncelleyerek bu context'i kullanabilirsiniz:
jsx
Copy code
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Remove = () => {
  const { state, dispatch } = useContext(CartContext);

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <div>
      <h1>Sepetiniz</h1>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - <button onClick={() => removeFromCart(item)}>Kaldır</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Remove;
Bu örnekte, CartContext kullanarak sepet durumunu ve dispatch işlevini alıyoruz. "Kaldır" düğmesine tıkladığınızda, sepetten öğe kaldırmak için REMOVE_FROM_CART eylemini kullanıyoruz.

Ayrıca, uygulamanızın en üst düzeyinde CartProvider bileşenini kullanarak sepet durumunu ve işlevlerini sağlamayı unutmayın.





