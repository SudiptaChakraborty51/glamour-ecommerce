import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./accountDetails.css";

const AccountDetails = () => {
  const { authState, userLogout } = useContext(AuthContext);
  return (
    <div className="account-details" style={{display : authState?.isLoggedIn ? "block" : "none"}}>
      <h1>Account Details</h1>
      <div>
        <p>
          <strong>Full Name:</strong> {authState?.user?.firstName}{" "}
          {authState?.user?.lastName}
        </p>
        <p>
          <strong>Email:</strong> {authState?.user?.email}
        </p>
        <button onClick={userLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AccountDetails;
