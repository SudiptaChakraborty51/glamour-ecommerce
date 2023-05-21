import axios from "axios";

export const addToCartHandler = async (product, dataDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { status, data } = await axios.post(
      `/api/user/cart`,
      { product },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (status === 201) {
      dataDispatch({
        type: "SET_CART",
        payload: data?.cart,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
