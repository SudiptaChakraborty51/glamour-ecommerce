import React, { useContext, useState } from "react";
import { OrderContext } from "../../../contexts/orderContext";
import "./couponModal.css";
import { toast } from "react-toastify";
import { getPriceDetails } from "../../../utils/getPriceDetails";
import { ProductContext } from "../../../contexts/productContext";

const COUPONS = [
  { couponName: "FIRSTGLAM", value: "10" },
  { couponName: "FIRST200", value: "200" },
];

export const CouponModal = ({ setCouponModal }) => {
  const { couponValue, setCouponValue } = useContext(OrderContext);
  const { productState } = useContext(ProductContext);
  const [input, setInput] = useState(couponValue);

  const { price, discount } = getPriceDetails(productState?.cart);
  const coupon = parseFloat(couponValue.value);
  const totalAmt = parseFloat(price + 10 - discount - coupon).toFixed(2);

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <h3>Apply Coupon</h3>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => setCouponModal(false)}
          />
        </div>
        <div className="modal-main">
          {COUPONS.map(({ couponName, value }) => (
            <div key={couponName}>
              <label>
                <input
                  type="radio"
                  className="coupon-radio"
                  name="coupon-radio"
                  onChange={() =>
                    setInput({
                      ...couponValue,
                      value: value,
                      couponName: couponName,
                    })
                  }
                  checked={value === input.value ? true : false}
                />
                Flat {value} OFF : {couponName}
              </label>
              {totalAmt <= 1000 && value === "200" && (
                <small className="coupon-msg">
                  {" "}
                  (Order amount is not more than ₹1000)
                </small>
              )}
            </div>
          ))}
        </div>
        <button
          disabled={totalAmt <= 1000 && input.value === "200"}
          onClick={() => {
            setCouponModal(false);
            setCouponValue(input);
            toast.success("Coupon is applied!");
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
