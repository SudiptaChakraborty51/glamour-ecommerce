import React, { createContext, useReducer, useState } from "react";
import { initialOrder, orderReducer } from "../reducer/orderReducer";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, initialOrder);
  const [couponValue, setCouponValue] = useState({ couponName: "", value: 0 });

  return (
    <OrderContext.Provider
      value={{
        addressDetails: orderState.addressDetails,
        priceDetails: orderState.priceDetails,
        orderDispatch,
        couponValue,
        setCouponValue,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
