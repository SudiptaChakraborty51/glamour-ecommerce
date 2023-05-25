import React, { useContext } from "react";
import "./checkoutPrice.css";
import { ProductContext } from "../../../contexts/productContext";
import { OrderContext } from "../../../contexts/orderContext";
import couponImg from "../../../assets/coupon.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContext";

const CheckoutPrice = () => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { couponValue, priceDetails } = useContext(OrderContext);
  const { price, discount, coupon, totalAmt } = priceDetails || {};
  const { addressDetails } = useContext(OrderContext);
  const {orderDispatch} = useContext(OrderContext);

  // const {user: {firstName, lastName, email}} = useContext(AuthContext);

  const navigate = useNavigate();

    const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load, check you internet connection");
      return;
    }
    const options = {
      key: "rzp_test_tkFBV0WQlVKWNr",
      amount: totalAmt * 100,
      currency: "INR",
      name: "GLAMOUR",
      description: "Thank you for shopping with us",
      image: "https://github.com/SudiptaChakraborty51/glamour-ecommerce/blob/master/public/icons8-cosmetic-16.png?raw=true",
      handler: function (response) {
        const orderData = {
          orderProducts: [...productState?.cart],
          amount: totalAmt,
          deliveryAddress: addressDetails,
          paymentId: response.razorpay_payment_id,
        };

        orderDispatch({
          type: "SET_ORDER_HISTORY",
          payload: orderData,
        });
        alert(
          `Payment of Rs. ${totalAmt} is Succesful !`
        );
        productDispatch({type: "SET_CART", payload: []})
        orderDispatch({type: "RESET_PRICE", payload: {}})
        navigate("/order-history");
      },
      // prefill: {
      //   name: `${firstName} ${lastName}`,
      //   email: email,
      //   contact: "9831578456",
      // },
      theme: {
        color: "#7e22ce",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const placeOrderHandler = () => {
    if(totalAmt === 0) {
      alert("Please add products to the cart!");
      navigate("/products");
    } else {
      displayRazorpay();
    }
  }

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
      {addressDetails ? (
        <div className="delivery-address">
          <strong>{addressDetails?.userName}</strong>
          <p>
            {addressDetails?.houseNumber}, {addressDetails?.city},{" "}
            {addressDetails?.state}
          </p>
          <p>
            Pincode: {addressDetails?.pincode}, {addressDetails?.country}
          </p>
          <p>Phone Number: {addressDetails?.mobileNumber}</p>
        </div>
      ) : (
        <p>No address is added!</p>
      )}
      <hr />
      <button
        className="place-order-btn"
        onClick={() => {
          if (productState?.address?.length === 0) {
            alert("Please select address!");
          } else {
            placeOrderHandler();
          }
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPrice;
