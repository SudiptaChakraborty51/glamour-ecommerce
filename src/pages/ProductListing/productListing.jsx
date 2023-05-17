import React, { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import ProductCard from "../../components/ProductCard/productCard";
import "./productListing.css";
import Sidebar from "../../components/Sidebar/sidebar";

const ProductListing = () => {
  const { productState } = useContext(ProductContext);
  return (
    <div className="products">
      <div className="sidebar-filter">
        <Sidebar />
      </div>
      <div className="productListing">
        <h2>Showing All Products</h2>
        <ul>
          {productState?.products?.map((product) => (
            <ProductCard productsData={product} key={product._id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductListing;
