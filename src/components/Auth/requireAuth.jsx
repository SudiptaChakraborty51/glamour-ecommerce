import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({children}) => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  console.log(authState?.isLoggedIn);
  return authState.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default RequireAuth;
