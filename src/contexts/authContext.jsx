import React, { createContext, useReducer } from "react";
import authReducer from "../reducer/authReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialAuth = {
    isLoggedIn: false,
    user: {},
    token: "",
  };

  const navigate=useNavigate();

  const [authState, authDispatch] = useReducer(authReducer, initialAuth);

  const userLogin = async (loginData) => {
    try {
      const { status, data } = await axios.post(`/api/auth/login`, loginData);
      console.log(loginData);
      if (status === 200) {
        authDispatch({ type: "SET_LOGGEDIN", payload: true });
        authDispatch({ type: "SET_USER", payload: data?.foundUser });
        authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });
        localStorage.setItem("token", data?.encodedToken);
        alert("Login Successful!");
        navigate("/");
      }
    } catch (e) {
      authDispatch({ type: "SET_LOGGEDIN", payload: false });
      console.error(e);
      alert(e.response.data.errors);
    }
  };

  const userSignup = async (signupData) => {
    try {
      const { status, data } = await axios.post(`/api/auth/signup`, signupData);
      if (status === 201) {
        authDispatch({ type: "SET_LOGGEDIN", payload: true });
        authDispatch({ type: "SET_USER", payload: data?.createdUser });
        authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });
        localStorage.setItem("token", data?.encodedToken);
        alert("Signup Successful!");
        navigate("/");
      }
    } catch (e) {
      authDispatch({ type: "SET_LOGGEDIN", payload: false });
      console.error(e);
      alert(e.response.data.errors);
    }
  };

  const userLogout = () => {
    authDispatch({ type: "SET_LOGGEDIN", payload: false });
    authDispatch({ type: "SET_USER", payload: {} });
    authDispatch({ type: "SET_TOKEN", payload: "" });
    localStorage.setItem("token", "");
    alert("You're logged out!");
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
