import axios from "axios";

export const getWishlistItems = async (encodedToken) => {
  try {
    const response = await axios.get(`/api/user/wishlist`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response?.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};
