import React, { useContext } from "react";
import "./cart.css";
import { ProductContext } from "../../contexts/productContext";
import EmptyCart from "./emptyCart";

const Cart = () => {
  const { productState } = useContext(ProductContext);
  console.log(productState?.cart);
  return (
      productState?.cart?.length === 0 ? <EmptyCart /> :
      <div>
        <h2>Cart ({productState?.cart?.length})</h2>
      </div>
  );
};

export default Cart;
