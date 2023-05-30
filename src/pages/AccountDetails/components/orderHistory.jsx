import React, { useContext } from "react";
import { OrderContext } from "../../../contexts/orderContext";
import { useNavigate } from "react-router-dom";
import "./orderHistory.css";
import { AuthContext } from "../../../contexts/authContext";

const OrderHistory = () => {
  const navigate = useNavigate();
  const { orderHistory } = useContext(OrderContext);
  const { authState } = useContext(AuthContext);

  console.log(orderHistory);

  const orderHistoryData =
    orderHistory &&
    authState?.user &&
    orderHistory?.filter(
      ({ userEmail }) => userEmail === authState?.user?.email
    );
  return (
    <div className="order-history">
      {orderHistoryData.length === 0 ? (
        <>
          <h3>Look's like your order is empty!</h3>
          <button
            className="shop-now-btn"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </>
      ) : (
        orderHistoryData?.map(
          ({ paymentId, amount, deliveryAddress, orderProducts }) => {
            return (
              <div className="order-history-main">
                <div className="order-history-left">
                  <h3>Order Confirmed!</h3>
                  <p>
                    <strong>Payment Id: </strong>
                    {paymentId}
                  </p>
                  <p>
                    <strong>Total Amount: </strong>
                    {amount}
                  </p>
                  <p>
                    <strong>Order will be delivered to: </strong>
                    <p>{deliveryAddress?.userName}</p>
                    <p>
                      {deliveryAddress?.houseNumber}, {deliveryAddress?.city},{" "}
                      {deliveryAddress?.state}
                    </p>
                    <p>
                      Pincode: {deliveryAddress?.pincode},{" "}
                      {deliveryAddress?.country}
                    </p>
                    <p>Phone Number: {deliveryAddress?.mobileNumber}</p>
                  </p>
                </div>
                <div className="order-history-right">
                  {orderProducts?.map(({ name, image, price, qty }) => (
                    <div className="order-history-right-card">
                      <img src={image} alt={name} />
                      <div>
                        <h4>
                          {name.length > 50
                            ? name.substring(0, 50) + "..."
                            : name}
                        </h4>
                        <small>Quantity: {qty}</small>
                        <p>Price: ₹{price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        )
      )}
    </div>
  );
};

export default OrderHistory;
