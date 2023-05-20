import React, { createContext, useEffect, useReducer } from "react";
import productReducer from "../reducer/productReducer";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    cart: [],
    wishlist: [],
    categories: [],
  };

  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );

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

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  const bestSellerProductData = productState?.products?.filter(
    ({ isBestSeller }) => isBestSeller
  );

  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        bestSellerProductData,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
