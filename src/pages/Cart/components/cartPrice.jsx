import React, { useContext } from "react";
import "./cartPrice.css";
import { ProductContext } from "../../../contexts/productContext";
import { getPriceDetails } from "../../../utils/getPriceDetails";
import { OrderContext } from "../../../contexts/orderContext";
import couponImg from "../../../assets/coupon.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartPrice = ({ setCouponModal }) => {
  const { productState } = useContext(ProductContext);
  const totalQuantity = productState?.cart?.reduce(
    (acc, { qty }) => acc + qty,
    0
  );
  const shippingCharge = 10;

  const { couponValue, setCouponValue, orderDispatch } =
    useContext(OrderContext);

  const { price, discount } = getPriceDetails(productState?.cart);
  const coupon = parseFloat(couponValue.value);
  const totalAmt = parseFloat(
    price + shippingCharge - discount - coupon
  ).toFixed(2);
  const totalDiscount = parseFloat(discount + coupon).toFixed(2);

  const navigate = useNavigate();
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
          <p>Shipping Charges</p>
          <p>₹ {shippingCharge}</p>
        </div>
        <div>
          <p>Coupon Discount</p>
          <p>
            {coupon !== 0 && "- "}₹ {coupon.toFixed(2)}
          </p>
        </div>
        {coupon !== 0 && (
          <div className="coupon">
            <p className="couponName">
              <img src={couponImg} alt="coupon" />
              <p>{couponValue.couponName}</p>
            </p>
            <p
              className="remove-coupon"
              onClick={() => {
                setCouponValue({ couponName: "", value: 0 });
                toast.success("Coupon is removed!");
              }}
            >
              <i className="fa fa-times" aria-hidden="true" />
            </p>
          </div>
        )}
        <hr />
        <div>
          <h3>Total Amount</h3>
          <h3>₹ {totalAmt}</h3>
        </div>
        <hr />
        <p className="save-msg">
          You will save ₹ {totalDiscount} on this order
        </p>
        <button
          className="checkout-btn"
          onClick={() => {
            orderDispatch({
              type: "SET_PRICE_DETAILS",
              payload: { price, discount, coupon, totalAmt, totalDiscount },
            });
            navigate("/checkout");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPrice;
