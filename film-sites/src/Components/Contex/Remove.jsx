import React, { useState } from "react";

const Remove = () => {
  const [cartItems, setCartItems] = useState([]);
  
  // Sepetten öğe kaldırma işlevi
  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Sepetiniz</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - <button onClick={() => removeFromCart(item)}>Kaldır</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Remove;