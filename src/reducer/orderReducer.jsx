export const initialOrder = {
  orderAddress: {},
  priceDetails: {
    price: 0,
    discount: 0,
    coupon: 0,
    totalAmt: 0,
    totalDiscount: 0,
  },
};
export const orderReducer = (state, action) => {
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
    case "SET_ORDER_ADDRESS":
      return {
        ...state,
        orderAddress: { ...action.payload },
      };
    case "RESET_PRICE":
      return initialOrder;
    default:
      return state;
  }
};
