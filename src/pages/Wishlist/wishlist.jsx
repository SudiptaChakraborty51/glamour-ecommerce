import React, { useContext } from "react";
import "./wishlist.css";
import { ProductContext } from "../../contexts/productContext";
import EmptyWishlist from "./emptyWishlist";

const Wishlist = () => {
  const { productState } = useContext(ProductContext);
  console.log(productState?.wishlist);
  return (
      productState?.wishlist?.length === 0 ? <EmptyWishlist /> :
      <div className="wishlist">
        <h1>Wishlist ({productState?.wishlist?.length})</h1>
      </div>
  );
};

export default Wishlist;
