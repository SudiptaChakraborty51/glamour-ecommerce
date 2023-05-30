import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import productReducer from "../reducer/productReducer";
import axios from "axios";
import { getCartItems } from "../utils/getCartItems";
import { AuthContext } from "./authContext";
import { getWishlistItems } from "../utils/getWishlistItems";

export const ProductContext = createContext();

const testUserAddress = [
  {
    id: 1,
    userName: "Sudipta Chakraborty",
    houseNumber: "168/A, Ajay Nagar",
    city: "Jadavpur, Kolkata",
    state: "West Bengal",
    country: "India",
    pincode: 700032,
    mobileNumber: 9831578456,
  },
];

const ProductProvider = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const [loader, setLoader] = useState(false);

  const initialState = {
    products: [],
    cart: [],
    wishlist: [],
    categories: [],
    address: testUserAddress,
  };

  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );

  const encodedToken = localStorage.getItem("token");

  const getData = async () => {
    try {
      const { status, data } = await axios.get("/api/products");
      if (status === 200) {
        productDispatch({
          type: "INITIALIZE_PRODUCTS",
          payload: data.products,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      const { status, data } = await axios.get("/api/categories");
      if (status === 200) {
        productDispatch({
          type: "INITIALIZE_CATEGORIES",
          payload: data.categories,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getProduct = async (productID) => {
    try {
      const { status, data } = await axios.get(`/api/products/${productID}`);
      if (status === 200) {
        return data;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const setItems = async () => {
    try {
      const cartResponse = await getCartItems(encodedToken);
      const wishlistResponse = await getWishlistItems(encodedToken);
      if (cartResponse.status === 200) {
        productDispatch({
          type: "SET_CART",
          payload: cartResponse?.data?.cart,
        });
      }
      if (wishlistResponse.status === 200) {
        productDispatch({
          type: "SET_WISHLIST",
          payload: wishlistResponse?.data?.wishlist,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const clearItems = () => {
    productDispatch({ type: "SET_CART", payload: [] });
    productDispatch({ type: "SET_WISHLIST", payload: [] });
  };

  useEffect(() => {
    setLoader(true);
    getData();
    getCategories();
    !authState?.isLoggedIn && clearItems();
    authState?.isLoggedIn && setItems();
    const id = setTimeout(() => {
      setLoader(false);
    }, 500);
    return () => clearTimeout(id);
    // eslint-disable-next-line
  }, [productDispatch, authState?.isLoggedIn]);

  const bestSellerProductData = productState?.products?.filter(
    ({ isBestSeller }) => isBestSeller
  );

  console.log(productState);

  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        bestSellerProductData,
        getProduct,
        loader,
        setLoader,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
