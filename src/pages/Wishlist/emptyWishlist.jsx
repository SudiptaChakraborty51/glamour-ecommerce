import React from "react";
import { useNavigate } from "react-router-dom";
import "./wishlist.css";
import emptyWishlistImg from "../../assets/empty-wishlist.png";

const EmptyWishlist = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyWishlist">
      <img src={emptyWishlistImg} alt="empty-wishlist" />
      <h2>Your Wishlist is Empty!</h2>
      <p>Explore exclusive products and add your favourites to Wishlist!</p>
      <button onClick={() => navigate("/products")}>Shop Now</button>
    </div>
  );
};

export default EmptyWishlist;
