import React from "react";
import { useNavigate } from "react-router-dom";
import "./error.css";
import errorImg from "../../assets/error-img.svg";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page-container">
      <img src={errorImg} alt="" />

      <div className="error-page-text">
        <h1>Looks like page is not found!</h1>
        <button onClick={() => navigate("/")}>Go to Homepage</button>
      </div>
    </div>
  );
};

export default Error;
