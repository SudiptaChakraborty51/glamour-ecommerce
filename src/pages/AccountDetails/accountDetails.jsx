import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./accountDetails.css";
import { NavLink, Outlet } from "react-router-dom";

const AccountDetails = () => {
  const { authState } = useContext(AuthContext);

  const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    backgroundColor: isActive ? "var(--light-purple)" : "var(--primary-color)",
    color: isActive ? "var(--primary-color)" : "white",
  });

  return (
    <div
      className="account-details"
      style={{ display: authState?.isLoggedIn ? "block" : "none" }}
    >
      <h1>Account Details</h1>
      <div className="account-details-div">
        <div className="account-details-nav">
          <NavLink
            to="/account-details/userDetails"
            className="profile-tab"
            style={getActiveStyle}
          >
            User Details
          </NavLink>
          <NavLink
            to="/account-details/addressDetails"
            className="profile-tab"
            style={getActiveStyle}
          >
            Address Details
          </NavLink>
          <NavLink
            to="/account-details/orderHistory"
            className="profile-tab"
            style={getActiveStyle}
          >
            Order History
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
