import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((product) => product.id === item.id);
    if (existingItem) {
      // Update the quantity of the existing item
      existingItem.itemQuantity += 1;
      setCart([...cart]);
    } else {
      // Add the new item to the cart
      setCart([...cart, { ...item, itemQuantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    const updatedCart = [...cart];
    setCart(
      updatedCart.map((item) => {
        if (item.id === id) {
          return { ...item, itemQuantity: item.itemQuantity + 1 };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (id) => {
    const updatedCart = [...cart];
    setCart(
      updatedCart.map((item) => {
        if (item.id === id) {
          if (!item.itemQuantity) {
              updatedCart.filter(item=>item.id !== id)
          } else {
            return { ...item, itemQuantity: item.itemQuantity - 1 };
          }
        }
        return item;
      })
    );
  };

  const deleteItem = (id) => {
    const updatedCart = [...cart];
    setCart(updatedCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
