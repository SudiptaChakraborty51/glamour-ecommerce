import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./accountDetails.css";
import { ProductContext } from "../../contexts/productContext";
import AddressForm from "../Checkout/components/addressForm";

const AccountDetails = () => {
  const { authState, userLogout } = useContext(AuthContext);
  const { productState, productDispatch } = useContext(ProductContext);
  const [isAddAddress, setIsAddAddress] = useState(false);
  return (
    <div
      className="account-details"
      style={{ display: authState?.isLoggedIn ? "block" : "none" }}
    >
      <h1>Account Details</h1>
      <div className="account-details-div">
        <hr />
        <h3>User Details</h3>
        <hr />
        <p>
          <strong>Full Name:</strong> {authState?.user?.firstName}{" "}
          {authState?.user?.lastName}
        </p>
        <p>
          <strong>Email:</strong> {authState?.user?.email}
        </p>
        <hr />
        <h3>Address Details</h3>
        <hr />
        {productState?.address?.length === 0 && <h4>No Address added!</h4>}
        {productState?.address?.map(
          ({
            id,
            userName,
            houseNumber,
            city,
            state,
            country,
            pincode,
            mobileNumber,
          }) => {
            return (
              <div key={id}>
                <strong>{userName}</strong>
                <p>
                  {houseNumber}, {city}, {state}
                </p>
                <p>
                  Pincode: {pincode}, {country}
                </p>
                <p>Phone Number: {mobileNumber}</p>
                <button
                  className="edit-address-btn"
                  onClick={() =>
                    productDispatch({ type: "EDIT_ADDRESS", payload: id })
                  }
                >
                  Edit
                </button>
                <button
                  className="delete-address-btn"
                  onClick={() =>
                    productDispatch({
                      type: "DELETE_USER_ADDRESS",
                      payload: id,
                    })
                  }
                >
                  Delete
                </button>
                <hr />
              </div>
            );
          }
        )}

        <button
          className="add-address-btn"
          onClick={() => setIsAddAddress(true)}
        >
          + Add New Address
        </button>
        <br />
        <button onClick={userLogout} className="logout-btn">
          Logout
        </button>
      </div>
      {isAddAddress && <AddressForm setIsAddAddress={setIsAddAddress} />}
    </div>
  );
};

export default AccountDetails;
