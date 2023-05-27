import React, { useContext } from "react";
import { OrderContext } from "../../../contexts/orderContext";
import { useNavigate } from "react-router-dom";
import "./orderHistory.css";

const OrderHistory = () => {
  const navigate = useNavigate();
  const { orderHistory } = useContext(OrderContext);
  console.log(orderHistory);
  const order = orderHistory[0] || {}
  return (
    <div className="order-history">
      {orderHistory.length === 0 ? (
        <>
          <h3>Look's like your order is empty!</h3>
          <button className = "shop-now-btn" onClick={() => navigate("/products")}>Shop Now</button>
        </>
      ) : (
          <div className="order-history-main">
            <div className="order-history-left">
            <h3>Order Confirmed!</h3>
              <p>
                <strong>Payment Id: </strong>
                {order?.paymentId}
              </p>
              <p>
                <strong>Total Amount: </strong>
                {order?.amount}
              </p>
              <p>
                <strong>Order will be delivered to: </strong>
                <p>{order?.deliveryAddress?.userName}</p>
                <p>
                  {order?.deliveryAddress?.houseNumber},{" "}
                  {order?.deliveryAddress?.city},{" "}
                  {order?.deliveryAddress?.state}
                </p>
                <p>
                  Pincode: {order?.deliveryAddress?.pincode},{" "}
                  {order?.deliveryAddress?.country}
                </p>
                <p>
                  Phone Number: {order?.deliveryAddress?.mobileNumber}
                </p>
              </p>
            </div>
            <div className="order-history-right">
              {
                order?.orderProducts?.map(({name, image, price, qty}) => <div className="order-history-right-card">
                  <img src={image} alt={name} />
                  <div>
                  <h4>{name.length > 50 ? name.substring(0, 50) + "..." : name}</h4>
                  <small>Quantity: {qty}</small>
                  <p>Price: ₹{price}</p>
                  </div>
                </div>)
              }
            </div>
          </div>
      )}
    </div>
  );
};

export default OrderHistory;
