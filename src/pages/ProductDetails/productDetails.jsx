import React, { useContext } from "react";
import "./productDetails.css";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/productContext";

const ProductDetails = () => {
  const { productID } = useParams();
  const { productState } = useContext(ProductContext);
  const selectedProduct = productState?.products?.find(
    (product) => product._id === productID
  );
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
  } = selectedProduct;

  return (
    <div className="product-details">
      <img src={image} alt={name} />
      <div className="details">
        <div className="card-tag">
          {isBestSeller && <span className="badge-bestseller">BESTSELLER</span>}
          <span role="button" disabled={true}>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </span>
        </div>
        <div className="details-content">
          <h2>{name}</h2>
          <div className="size-brand-reviews">
          <p>{size}</p>
          <p>Brand: {brand}</p>
          <p>
            {ratings?.value} <i className="fa fa-star"></i> ({ratings.count}{" "}
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
          <button className="add-to-cart">
            {" "}
            <i className="fa fa-shopping-cart"></i> Add to Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
