import axios from "axios";

export const removeFromWishlistHandler = async (dataDispatch, itemId) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { status, data } = await axios.delete(
      `/api/user/wishlist/${itemId}`,
      {
        headers: { authorization: encodedToken },
      }
    );
    if (status === 200) {
      dataDispatch({
        type: "SET_WISHLIST",
        payload: data?.wishlist,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
