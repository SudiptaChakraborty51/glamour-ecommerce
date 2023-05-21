import axios from "axios";

export const getCartItems = async (encodedToken) => {
  try {
    const response = await axios.get(`/api/user/cart`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};
