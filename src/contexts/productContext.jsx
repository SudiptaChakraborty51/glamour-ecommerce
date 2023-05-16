import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProductData(data?.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ productData }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
