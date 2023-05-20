import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { ProductContext } from "./productContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const {productState, productDispatch} = useContext(ProductContext);
  const encodedToken = localStorage.getItem("token");

  const getCartData = async () => {
    try {
      const { status, data } = await axios.get(`/api/user/cart`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (status === 200) {
        productDispatch({ type: "SET_CART", payload: data?.cart });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addToCartHandler = async (cartData) => {
    try {
      const { status, data } = await axios.post(
        `/api/user/cart`,
        {
          cartData,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (status === 201) {
        productDispatch({ type: "SET_CART", payload: data?.cart });
        alert("Item Added to Cart!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromCartHandler = async (itemId) => {
    try {
      const { status, data } = await axios.delete(`/api/user/cart/${itemId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (status === 200) {
        productDispatch({ type: "SET_CART", payload: data?.cart });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const isItemInCart = (data, id) => {
    return data?.find(item => item._id === id ) ? true : false
  } 

  console.log(productState?.cart);

  useEffect(() => {
    getCartData();
    // eslint-disable-next-line
  },[]);

  return <CartContext.Provider value={{getCartData, addToCartHandler, removeFromCartHandler, isItemInCart}}>{children}</CartContext.Provider>;
};

export default CartProvider;
