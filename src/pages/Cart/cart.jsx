import React, { useContext, useState } from "react";
import "./cart.css";
import { ProductContext } from "../../contexts/productContext";
import EmptyCart from "./emptyCart";
import CartCard from "./cartCard";
import CartPrice from "./cartPrice";

const Cart = () => {
  const { productState } = useContext(ProductContext);
  const [couponModal, setCouponModal] = useState(false);
  return (
      productState?.cart?.length === 0 ? <EmptyCart /> :
      <div className="cart">
        <h1>Cart ({productState?.cart?.length})</h1>
        <div className="cart-container">
          <div className="cart-item-container">
            {
              productState?.cart?.length > 0 && productState?.cart?.map(product => <CartCard key={product._id} product={product} />) 
            }
          </div>
          {productState?.cart?.length > 0 && <CartPrice setCouponModal={setCouponModal}/>}
        </div>
      </div>
  );
};

export default Cart;
