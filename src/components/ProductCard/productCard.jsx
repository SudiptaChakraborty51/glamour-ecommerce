import React, { useContext } from "react";
import "./productCard.css";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/productContext";
import { AuthContext } from "../../contexts/authContext";
import { isItemInCart } from "../../utils/isItemInCart";
import { addToCartHandler } from "../../utils/addToCartHandler";
import { addToWishlistHandler } from "../../utils/addToWishlistHandler";
import {isItemInWishlist} from "../../utils/isItemInWishlist";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlistHandler";

const ProductCard = ({ productsData }) => {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  const { productState, productDispatch } = useContext(ProductContext);
  const {
    _id,
    name,
    image,
    size,
    price,
    originalPrice,
    off,
    ratings,
    isBestSeller,
  } = productsData;
  
  return (
    <div className="product-card">
      <div className="card-tag">
        {isBestSeller && <span className="card-badge">BESTSELLER</span>}
        <span role="button" className={`${isItemInWishlist(productState?.wishlist, _id) ? `wishlist-toggle` : `wishlist-icon`}`} onClick={() => {
          if (authState.isLoggedIn) {
            if (isItemInWishlist(productState?.wishlist, _id)) {
              removeFromWishlistHandler(productDispatch, _id);
              alert("Item is removed from Wishlist!");
            } else {
              addToWishlistHandler(productsData, productDispatch);
              alert("Item is added to Wishlist!");
            }
          } else {
            alert("Please login to proceed!");
            navigate("/login");
          }
        }}>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </span>
      </div>
      <div
        onClick={() => navigate(`/products/${_id}`)}
        className="content-product-card"
      >
        <img src={image} alt={name} />
        <div className="name-rating">
          <h4>{name.length > 50 ? name.substring(0, 50) + "..." : name}</h4>
          <div className="card-star">
            <p>{ratings?.value}</p>
            <i className="fa fa-star"></i>
          </div>
        </div>
        <p className="size">{size}</p>
        <p className="price-text">
          MRP: <strong>₹{price}</strong>{" "}
          <span className="originalPrice">₹{originalPrice}</span> |{" "}
          <span className="off">{off} Off</span>
        </p>
      </div>
      <button
        className={`${isItemInCart(productState?.cart, _id) ? `go-to-cart` : `add-to-cart`}`}
        onClick={() => {
          if (authState.isLoggedIn) {
            if (isItemInCart(productState?.cart, _id)) {
              navigate("/cart");
            } else {
              addToCartHandler(productsData, productDispatch);
              alert("Item is added to Cart!");
            }
          } else {
            alert("Please login to proceed!");
            navigate("/login");
          }
        }}
      >
        <i className="fa fa-shopping-cart"></i>{" "}
        {isItemInCart(productState?.cart, _id) ? "Go to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
