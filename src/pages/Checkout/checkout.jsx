import React, { useContext } from "react";
import "./checkout.css";
import CheckoutPrice from "./components/checkoutPrice";
import { ProductContext } from "../../contexts/productContext";
import AddressContainer from "./components/addressContainer";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { productState } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <div
      className="checkout
    "
    >
      <h1>Checkout</h1>
      {productState?.cart?.length !== 0 ? (
        <div className="checkout-container">
          <div className="checkout-address">
            <hr />
            <h3>Select Address</h3>
            <hr />
            <AddressContainer />
            <button
              onClick={() => navigate("/account-details")}
              className="add-new-address-btn"
            >
              Add new Address
            </button>
          </div>
          <CheckoutPrice />
        </div>
      ) : (
        <h4>There are no products in cart.</h4>
      )}
    </div>
  );
};

export default Checkout;
