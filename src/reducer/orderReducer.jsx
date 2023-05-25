export const initialOrder = {
  addressDetails: {},
  priceDetails: {
    price: 0,
    discount: 0,
    coupon: 0,
    totalAmt: 0,
    totalDiscount: 0,
  },
  orderHistory: [],
};
export const orderReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_PRICE_DETAILS":
      const { price, discount, coupon, totalAmt, totalDiscount } =
        action.payload;
      return {
        ...state,
        priceDetails: {
          ...action.payload,
          price,
          discount,
          coupon,
          totalAmt,
          totalDiscount,
        },
      };
    case "RESET_PRICE":
      return initialOrder;
    case "SET_ORDER_HISTORY":
      return {
        ...state,
        orderHistory: [...state.orderHistory, action.payload],
      };
    case "SET_ADDRESS_DETAILS":
      return {
        ...state,
        addressDetails: action.payload,
      };
    default:
      return state;
  }
};
