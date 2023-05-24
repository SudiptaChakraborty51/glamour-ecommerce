import React, { useContext } from "react";
import "./checkoutPrice.css";
import { ProductContext } from "../../../contexts/productContext";
import { OrderContext } from "../../../contexts/orderContext";
import couponImg from "../../../assets/coupon.png";
import { useNavigate } from "react-router-dom";

const CheckoutPrice = () => {
  const { productState } = useContext(ProductContext);
  const { couponValue, priceDetails } =
    useContext(OrderContext);
  const { price, discount, coupon, totalAmt } = priceDetails || {};
  const {addressDetails} = useContext(OrderContext);

  const navigate = useNavigate();
  
  return (
    <div className="checkout-price">
      <hr />
      <h3>Order Details</h3>
      <hr />
      <div className="item-list">
        <div>
          <div className="item-list-header">
            <strong>Item</strong>
            <strong>Qty</strong>
          </div>
        </div>
        <div className="cart-items">
          {productState?.cart?.map(({ _id, name, qty }) => (
            <div key={_id}>
              <p>{name}</p>
              <p>{qty}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <h3>Price Details</h3>
      <hr />
      <div className="checkout-calculate-content">
        <div>
          <p>Price ({productState?.cart?.length} items)</p>
          <p>₹ {price}</p>
        </div>
        <div>
          <p>Discount</p>
          <p> - ₹ {discount}</p>
        </div>
        <div>
          <p>Delivery Charges</p>
          <p>FREE</p>
        </div>
        <div>
          <p>Shipping Charges</p>
          <p>₹ 10</p>
        </div>
        <div>
          <p>Coupon Discount</p>
          <p>
            {coupon !== 0 && "- "}₹ {coupon?.toFixed(2)}
          </p>
        </div>
        {coupon !== 0 && (
          <div className="coupon">
            <p className="couponName">
              <img src={couponImg} alt="coupon" />
              <p>{couponValue.couponName}</p>
            </p>
          </div>
        )}
        <hr />
        <div>
          <h3>Total Amount</h3>
          <h3>₹ {totalAmt}</h3>
        </div>
        <hr />
      </div>
      <h3>Deliver To</h3>
      {
        addressDetails ?
         <div className="delivery-address">
          <strong>{addressDetails?.userName}</strong>
                <p>
                  {addressDetails?.houseNumber}, {addressDetails?.city}, {addressDetails?.state}
                </p>
                <p>
                  Pincode: {addressDetails?.pincode}, {addressDetails?.country}
                </p>
                <p>Phone Number: {addressDetails?.mobileNumber}</p>
        </div>
        :
        <p>No address is added!</p>
      }
      <hr />
      <button
        className="place-order-btn"
        onClick={() => {
          if (productState?.address?.length === 0 ) {
            alert("Please select address!");
          } else {
            alert("Order Placed!");
            navigate("/");
          }
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPrice;
