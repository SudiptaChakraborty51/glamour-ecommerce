import React, { useContext, useEffect, useState } from "react";
import "./productDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/productContext";
import { isItemInWishlist } from "../../utils/isItemInWishlist";
import { AuthContext } from "../../contexts/authContext";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlistHandler";
import { addToWishlistHandler } from "../../utils/addToWishlistHandler";
import { isItemInCart } from "../../utils/isItemInCart";
import { addToCartHandler } from "../../utils/addToCartHandler";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { productID } = useParams();
  const { productState, getProduct, productDispatch } =
    useContext(ProductContext);
  const { authState } = useContext(AuthContext);

  const [singleProduct, setSingleProduct] = useState({});

  console.log(productState?.products);
  const navigate = useNavigate();

  const getSingleProduct = async () => {
    try {
      const product = await getProduct(productID);
      setSingleProduct(product?.product);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getSingleProduct();
    // eslint-disable-next-line
  }, []);

  const {
    _id,
    name,
    image,
    brand,
    size,
    price,
    originalPrice,
    off,
    offer,
    ratings,
    inStock,
    isBestSeller,
  } = singleProduct;

  return (
    <div className="product-details">
      <img src={image} alt={name} />
      <div className="details">
        <div className="details-tag">
          {isBestSeller && <span className="card-badge">BESTSELLER</span>}
          <button
            disabled={!inStock && true}
            style={{ cursor: !inStock ? "not-allowed" : "pointer" }}
            className={`${
              isItemInWishlist(productState?.wishlist, _id)
                ? `wishlist-toggle`
                : `wishlist-icon`
            }`}
            onClick={() => {
              if (authState.isLoggedIn) {
                if (isItemInWishlist(productState?.wishlist, _id)) {
                  removeFromWishlistHandler(productDispatch, _id);
                  toast.success("Item is removed from Wishlist!");
                } else {
                  addToWishlistHandler(singleProduct, productDispatch);
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
        <div className="details-content">
          <h2>{name}</h2>
          <div className="size-brand-reviews">
            <p>{size}</p>
            <p>Brand: {brand}</p>
            <p>
              {ratings?.value} <i className="fa fa-star"></i> ({ratings?.count}{" "}
              reviews)
            </p>
          </div>
          <p className="price-content">
            MRP: <strong>₹{price}</strong>{" "}
            <span className="originalPrice">₹{originalPrice}</span> |{" "}
            <span className="off">{off} Off</span>
          </p>
          {offer && <li className="product-offer">Offer: {offer}</li>}
          <div className="facility-div">
            <span>
              <i className="fa fa-tag" aria-hidden="true"></i> Fastest Delivery
            </span>
            <span>
              <i className="fa fa-tag" aria-hidden="true"></i> Inclusive of All
              Taxes
            </span>
            <span>
              <i className="fa fa-tag" aria-hidden="true"></i> Cash On Delivery
              Available
            </span>
          </div>
          <p>
            Availability:{" "}
            <span className="in-stock">{inStock && "In Stock"}</span>
            <span className="out-of-stock">{!inStock && "Out of Stock"}</span>
          </p>
          <button
            disabled={!inStock && true}
            style={{
              cursor: !inStock && "not-allowed",
              opacity: !inStock && "0.5",
            }}
            className={`${
              isItemInCart(productState?.cart, _id)
                ? `go-to-cart`
                : `add-to-cart`
            }`}
            onClick={() => {
              if (authState.isLoggedIn) {
                if (isItemInCart(productState?.cart, _id)) {
                  navigate("/cart");
                } else {
                  addToCartHandler(singleProduct, productDispatch);
                  toast.success("Item is added to Cart!");
                }
              } else {
                toast.warn("Please login to proceed!");
                navigate("/login");
              }
            }}
          >
            <i className="fa fa-shopping-cart"></i>{" "}
            {isItemInCart(productState?.cart, _id)
              ? "Go to Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
