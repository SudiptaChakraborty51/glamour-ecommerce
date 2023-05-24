import React, { useContext, useState } from "react";
import { OrderContext } from "../../../contexts/orderContext";
import "./couponModal.css";

const COUPONS = [
  { couponName: "FIRSTGLAM", value: "10" },
  { couponName: "FIRST200", value: "200" },
];

export const CouponModal = ({ setCouponModal }) => {
  const { couponValue, setCouponValue } = useContext(OrderContext);
  const [input, setInput] = useState(couponValue);
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
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setCouponModal(false);
            setCouponValue(input);
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
