import React, { useContext } from "react";
import "./checkout.css";
import CheckoutPrice from "./checkoutPrice";
import { ProductContext } from "../../contexts/productContext";

const Checkout = () => {
  const { productState } = useContext(ProductContext);
  return (
    <div
      className="checkout
    "
    >
      <h1>Checkout</h1>
      {productState?.cart?.length !== 0 ? (
        <CheckoutPrice />
      ) : (
        <h4>There are no products in cart.</h4>
      )}
    </div>
  );
};

export default Checkout;
