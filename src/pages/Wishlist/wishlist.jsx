import React, { useContext } from "react";
import "./wishlist.css";
import { ProductContext } from "../../contexts/productContext";
import EmptyWishlist from "./emptyWishlist";
import ProductCard from "../../components/ProductCard/productCard";

const Wishlist = () => {
  const { productState } = useContext(ProductContext);
  console.log(productState?.wishlist);
  return productState?.wishlist?.length === 0 ? (
    <EmptyWishlist />
  ) : (
    <div className="wishlist">
      <h1>Wishlist ({productState?.wishlist?.length})</h1>
      <div className="wishlist-container">
        <div className="wishlist-list">
          {productState?.wishlist?.map((product) => (
            <li>
              <ProductCard productsData={product} key={product._id} />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
