import React, { createContext, useReducer } from "react";
import authReducer from "../reducer/authReducer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialAuth = {
    isLoggedIn: false,
    user: {},
    token: "",
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [authState, authDispatch] = useReducer(authReducer, initialAuth);

  const userLogin = async (loginData) => {
    try {
      const { status, data } = await axios.post(`/api/auth/login`, loginData);
      if (status === 200) {
        localStorage.setItem("token", data?.encodedToken);
        authDispatch({ type: "SET_LOGGEDIN_TRUE", payload: true });
        authDispatch({ type: "SET_USER", payload: data?.foundUser });
        authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });
        toast.success("Login Successful!");
        navigate(
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : "/"
        );
      }
    } catch (e) {
      authDispatch({ type: "SET_LOGGEDIN_FALSE", payload: false });
      console.error(e);
      toast.error(e.response.data.errors[0]);
    }
  };

  const userSignup = async (signupData) => {
    try {
      const { status, data } = await axios.post(`/api/auth/signup`, signupData);
      if (status === 201) {
        localStorage.setItem("token", data?.encodedToken);
        authDispatch({ type: "SET_LOGGEDIN_TRUE", payload: true });
        authDispatch({ type: "SET_USER", payload: data?.createdUser });
        authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });
        toast.success("Signup Successful!");
        navigate("/");
      }
    } catch (e) {
      authDispatch({ type: "SET_LOGGEDIN_FALSE", payload: false });
      console.error(e);
      toast.error(e.response.data.errors[0]);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("token");
    authDispatch({ type: "SET_LOGGEDIN_FALSE", payload: false });
    authDispatch({ type: "SET_USER", payload: {} });
    authDispatch({ type: "SET_TOKEN", payload: "" });
    toast.success("You're logged out!");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authState, userLogin, userSignup, userLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
