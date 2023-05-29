import React, { useContext, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext);

  const [isPasswordHide, setIsPasswordHide] = useState(true);

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
      toast.error("Enter valid input!");
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
              type="email"
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
            <div className="password-wrapper">
              <input
                id="password"
                type={isPasswordHide ? "password" : "text"}
                placeholder={isPasswordHide ? "********" : "Enter password"}
                value={userData.password}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, password: e.target.value }))
                }
                required
              />
              <span
                onClick={() =>
                  setIsPasswordHide((isPasswordHide) => !isPasswordHide)
                }
              >
                {isPasswordHide ? (
                  <i class="fa-regular fa-eye-slash"></i>
                ) : (
                  <i class="fa-regular fa-eye"></i>
                )}
              </span>
            </div>
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
