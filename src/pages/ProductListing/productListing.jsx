import React, { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import ProductCard from "../../components/ProductCard/productCard";
import "./productListing.css";
import Sidebar from "../../components/Sidebar/sidebar";

const ProductListing = () => {
  const { productData } = useContext(ProductContext);
  return (
    <>
      <Sidebar />
      <div className="productListing">
        <h2>Showing All Products</h2>
        <ul>
          {productData?.map((product) => (
            <ProductCard productsData={product} key={product._id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductListing;
