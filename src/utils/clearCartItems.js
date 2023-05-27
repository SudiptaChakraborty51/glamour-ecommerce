import { removeFromCartHandler } from "./removeFromCartHandler";
const clearCartItems = (dataDispatch, dataState) => {
  for (const item of dataState?.cart) {
    removeFromCartHandler(dataDispatch, item?._id);
  }
};

export default clearCartItems;
