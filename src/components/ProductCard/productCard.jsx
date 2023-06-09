import React, { useContext } from "react";
import "./productCard.css";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/productContext";
import { AuthContext } from "../../contexts/authContext";
import { isItemInCart } from "../../utils/isItemInCart";
import { addToCartHandler } from "../../utils/addToCartHandler";
import { addToWishlistHandler } from "../../utils/addToWishlistHandler";
import { isItemInWishlist } from "../../utils/isItemInWishlist";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlistHandler";
import { toast } from "react-toastify";

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
    inStock,
    isBestSeller,
  } = productsData;

  return (
    <div
      className={
        inStock ? "product-card" : "product-card out-of-stock-product-card"
      }
    >
      <div className="card-tag">
        {isBestSeller && <span className="card-badge">BESTSELLER</span>}
        <button
          className={`${
            isItemInWishlist(productState?.wishlist, _id)
              ? `wishlist-toggle`
              : `wishlist-icon`
          }`}
          style={{ cursor: !inStock ? "not-allowed" : "pointer" }}
          disabled={!inStock && true}
          onClick={() => {
            if (authState.isLoggedIn) {
              if (isItemInWishlist(productState?.wishlist, _id)) {
                removeFromWishlistHandler(productDispatch, _id);
                toast.success("Item is removed from Wishlist!");
              } else {
                addToWishlistHandler(productsData, productDispatch);
                toast.success("Item is added to Wishlist!");
              }
            } else {
              toast.warn("Please login to proceed!");
              navigate("/login");
            }
          }}
        >
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
      </div>
      <div
        onClick={() => navigate(`/products/${_id}`)}
        className="content-product-card"
      >
        <div className="content-product-img">
          <img src={image} alt={name} />
          {!inStock && <b className="out-of-stock-overlay">Out of Stock</b>}
        </div>
        <div className="name-rating">
          <p className="product-name">
            {name.length > 30 ? name.substring(0, 30) + "..." : name}
          </p>
          <div className="card-star">
            <p>{ratings?.value}</p>
            <i className="fa fa-star"></i>
          </div>
        </div>
        <div className="product-content">
          <p className="size">{size}</p>
          <p className="price-text">
            MRP: <strong>₹{price}</strong>{" "}
            <span className="originalPrice">₹{originalPrice}</span> |{" "}
            <span className="off">{off} Off</span>
          </p>
        </div>
      </div>
      <button
        style={{ cursor: !inStock && "not-allowed" }}
        disabled={!inStock && true}
        className={`${
          isItemInCart(productState?.cart, _id) ? `go-to-cart` : `add-to-cart`
        }`}
        onClick={() => {
          if (authState.isLoggedIn) {
            if (isItemInCart(productState?.cart, _id)) {
              navigate("/cart");
            } else {
              addToCartHandler(productsData, productDispatch);
              toast.success("Item is added to Cart!");
            }
          } else {
            toast.warn("Please login to proceed!");
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
