import React, { useContext } from "react";
import "./cart.css";
import { ProductContext } from "../../contexts/productContext";
import EmptyCart from "./emptyCart";

const Cart = () => {
  const { productState } = useContext(ProductContext);
  console.log(productState?.cart);
  return (
      productState?.cart?.length === 0 ? <EmptyCart /> :
      <div className="cart">
        <h1>Cart ({productState?.cart?.length})</h1>
      </div>
  );
};

export default Cart;
