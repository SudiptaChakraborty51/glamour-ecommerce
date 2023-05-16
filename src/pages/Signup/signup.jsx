import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <div className="name">
        <div>
          <label for="first-name">First Name</label>
          <input id="first-name" placeholder="Test" />
        </div>
        <div>
          <label for="last-name">Last Name</label>
          <input id="last-name" placeholder="Admin" />
        </div>
      </div>

      <div>
        <label for="email">Email</label>
        <input id="email" placeholder="test@gmail.com" />
      </div>

      <div>
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="********" />
      </div>

      <div>
        <label for="confirm-password">Confirm Password</label>
        <input id="confirm-password" type="password" placeholder="********" />
      </div>

      <button>Signup</button>

      <p onClick={() => navigate("/login")}>
        Already have an account <i class="fa-solid fa-angle-right"></i>
      </p>
    </div>
  );
};

export default Signup;
