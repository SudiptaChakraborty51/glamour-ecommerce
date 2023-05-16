import React from "react";
import "./productCard.css";

const ProductCard = ({ productsData }) => {
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
    categoryName,
    productType,
    ratings,
    inStock,
    isBestSeller,
    quantity,
  } = productsData;
  return (
    <div>
      <li className="product-card">
        <div className="card-tag">
          {isBestSeller && <span className="card-badge">BESTSELLER</span>}
          <span role="button" disabled={true}>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </span>
        </div>
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
        <button className="add-to-cart">
          {" "}
          <i className="fa fa-shopping-cart"></i> Add to Cart{" "}
        </button>
      </li>
    </div>
  );
};

export default ProductCard;
