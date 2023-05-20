import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./cart.css";

const EmptyCart = () => {
    const navigate = useNavigate();
  return (
    <div className='empty-cart'>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" alt="empty-cart" />
      <h2>Your Cart is Empty!</h2>
      <p>Go ahead and explore exclusive products!</p>
      <button onClick={() => navigate("/products")}>Shop Now</button>
    </div>
  )
}

export default EmptyCart
