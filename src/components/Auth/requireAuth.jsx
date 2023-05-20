import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  return authState.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default RequireAuth;
