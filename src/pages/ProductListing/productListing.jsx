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
          {sortByPriceFilteredProducts.length > 0 ? (
            sortByPriceFilteredProducts?.map((product) => (
              <li>
                <ProductCard productsData={product} key={product._id} />
              </li>
            ))
          ) : (
            <h4>There are no products for selected filters.</h4>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductListing;
