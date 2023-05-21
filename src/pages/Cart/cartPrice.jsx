import React, { useContext } from "react";
import "./cartPrice.css";
import { ProductContext } from "../../contexts/productContext";
import { getPriceDetails } from "../../utils/getPriceDetails";

const CartPrice = ({ setCouponModal }) => {
  const { productState } = useContext(ProductContext);
  const totalQuantity = productState?.cart?.reduce(
    (acc, { qty }) => acc + qty,
    0
  );

  const coupon = 0;

  const { price, discount } = getPriceDetails(productState?.cart);
  const totalAmt = parseFloat(price - discount - coupon).toFixed(2);
  const totalDiscount = parseFloat(discount + coupon).toFixed(2);

  return (
    <div className="cart-price">
      <div className="coupon-content">
        <p>
          <i className="fa fa-tag" aria-hidden="true"></i> Have a coupon ?
        </p>
        <button
          className="apply-coupon-btn"
          onClick={() => setCouponModal(true)}
        >
          Apply
        </button>
      </div>
      <hr />
      <h2>Price Details</h2>
      <hr />
      <div className="price-calculate-content">
        <div>
          <p>Price ({totalQuantity} items)</p>
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
          <p>Coupon Discount</p>
          <p>₹ {coupon.toFixed(2)}</p>
        </div>
        <hr />
        <div>
          <h3>Total Amount</h3>
          <h3>₹ {totalAmt}</h3>
        </div>
        <hr />
        <p className="save-msg">
          You will save ₹ {totalDiscount} on this order
        </p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartPrice;
