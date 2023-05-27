import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const guestUserData = {
    email: "sudiptachakroborty20@gmail.com",
    password: "sudiptacha",
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!userData.email.trim() || !userData.password.trim()) {
      alert("Enter valid input!");
    } else {
      userLogin(userData);
    }
  };

  const loginAsGuestHandler = (e) => {
    e.preventDefault();
    setUserData(guestUserData);
    userLogin(guestUserData);
  };

  return (
    <div>
      <div className="login">
        <h2>Login</h2>
        <form>
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              placeholder="test@gmail.com"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
          </div>

          <div>
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
          </div>

          <button className="login-button" onClick={loginHandler}>
            Login
          </button>
          <button className="login-button guest" onClick={loginAsGuestHandler}>
            Login As Guest
          </button>
        </form>

        <p onClick={() => navigate("/signup")}>
          Create New account <i class="fa-solid fa-angle-right"></i>
        </p>
      </div>
    </div>
  );
};

export default Login;
