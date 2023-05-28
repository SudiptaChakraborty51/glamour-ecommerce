import React, { useContext } from "react";
import { handleCartQuantityChange } from "../../../utils/handleCartQuantityChange";
import { ProductContext } from "../../../contexts/productContext";
import { removeFromCartHandler } from "../../../utils/removeFromCartHandler";
import { isItemInWishlist } from "../../../utils/isItemInWishlist";
import { addToWishlistHandler } from "../../../utils/addToWishlistHandler";
import { useNavigate } from "react-router-dom";
import "./cartCard.css";
import { toast } from "react-toastify";

const CartCard = ({ product }) => {
  const { _id, name, image, size, price, originalPrice, off } = product;
  const { productState, productDispatch } = useContext(ProductContext);

  const navigate = useNavigate();

  return (
    <div
      key={_id}
      className="cart-card-container"
    >
      <div className="cart-card-content">
        <img src={image} alt={name} onClick={() => navigate(`/products/${_id}`)}/>
        <div className="cart-card-right-container">
          <h4 onClick={() => navigate(`/products/${_id}`)}>{name.length > 50 ? name.substring(0, 50) + "..." : name}</h4>
          <p className="size">{size}</p>
          <p className="price-text">
            MRP: <strong>₹{price}</strong>{" "}
            <span className="originalPrice">₹{originalPrice}</span> |{" "}
            <span className="off">{off} Off</span>
          </p>
          <div className="qty">
            <button
              className="minus"
              onClick={() =>{
                if(product.qty > 1) {
                handleCartQuantityChange(productDispatch, _id, "decrement");
                toast.success("Decreased quantity of item in cart!");
              }
            }
            }
              disabled={product.qty > 1 ? false : true}
              style={{ cursor: product.qty <= 1 && "not-allowed" }}
            >
              -
            </button>
            <span className="qty-count">{product.qty}</span>
            <button
              className="add"
              onClick={() => {
                handleCartQuantityChange(productDispatch, _id, "increment");
                toast.success("Increased quantity of item in cart!");
              }
            }
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="cart-card-horizontal-btn">
        <button
          className="remove-cart-btn"
          onClick={() => {
            removeFromCartHandler(productDispatch, _id);
            toast.success("Item is removed from Cart!");
          }}
        >
          Remove From Cart
        </button>
        <button
          className="add-wishlist-btn"
          onClick={() => {
            if (isItemInWishlist(productState?.wishlist, _id)) {
              navigate("/wishlist");
            } else {
              addToWishlistHandler(product, productDispatch);
              toast.success("Item is added to Wishlist!");
            }
          }}
        >
          {isItemInWishlist(productState?.wishlist, _id)
            ? "Go To Wishlist"
            : "Add To Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default CartCard;
