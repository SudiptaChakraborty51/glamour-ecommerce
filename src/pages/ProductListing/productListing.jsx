import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/productCard";
import "./productListing.css";
import Sidebar from "../../components/Sidebar/sidebar";
import { FilterContext } from "../../contexts/filterContext";

const ProductListing = () => {
  const { sortByPriceFilteredProducts } = useContext(FilterContext);
  
  return (
    <div className="products">
      <div className="sidebar-filter">
        <Sidebar />
      </div>
      <div className="productListing">
        <h2>
          Showing All Products
          <small>({sortByPriceFilteredProducts?.length})</small>
        </h2>
        <ul>
          {sortByPriceFilteredProducts?.map((product) => (
            <ProductCard productsData={product} key={product._id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductListing;
