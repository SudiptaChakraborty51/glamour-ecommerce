import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="login">
        <h2>Login</h2>
        <div>
          <label for="email">Email</label>
          <input id="email" placeholder="test@gmail.com" />
        </div>

        <div>
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="********" />
        </div>

        <button className="login-button">Login</button>
        <button className="login-button guest">Login As Guest</button>

        <p onClick={() => navigate("/signup")}>
          Create New account <i class="fa-solid fa-angle-right"></i>
        </p>
      </div>
    </div>
  );
};

export default Login;
