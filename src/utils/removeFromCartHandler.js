import axios from "axios";

export const removeFromCartHandler = async (dataDispatch, itemId) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { status, data } = await axios.delete(`/api/user/cart/${itemId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (status === 200) {
      dataDispatch({
        type: "SET_CART",
        payload: data?.cart,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
