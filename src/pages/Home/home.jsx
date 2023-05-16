import React from "react";
import Slider from "../../components/Slider/slider";
import "./home.css";
import summer from "../../assets/summer.jpg";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h2>Best in Glamour</h2>
      <Slider />
      <div className="sales">
        <img src={summer} alt="summer" />
        <div className="sales-content">
          <p>The Summer Sale</p>
          <p>Up to 30% off</p>
          <button>
            <NavLink className="shopnow-btn" to="/products"><span>Shop Now</span></NavLink>
          </button>
        </div>
      </div>
      <h2>First Purchase Offers</h2>
      <div className="offers">
        <div className="offer-card">
          <p className="offer-text">FREE SHIPPING ON YOUR FIRST PURCHASE</p>
          <span className="code">USE CODE: FIRSTGLAM</span>
        </div>
        <div className="offer-card">
          <p className="offer-text">FLAT ₹200 OFF ON ORDERS ABOVE ₹2000</p>
          <span className="code">USE CODE: FIRST200</span>
        </div>
      </div>
      <footer>
        <div className="newsletter">
          <h2>Newsletter</h2>
          <p>Get timely updates from your favorite products.</p>
          <div className="input-container">
            <input placeholder="Your email" />
            <button>Send</button>
          </div>
        </div>
        <div className="facilities">
          <div>
            <i class="fa-solid fa-truck-fast facilities-icon"></i>
            <p>FREE SHIPPING</p>
          </div>
          <div>
            <i class="fa-solid fa-rotate-left facilities-icon"></i>
            <p>EASY RETURNS</p>
          </div>
          <div>
            <i class="fa-solid fa-cloud-arrow-up facilities-icon"></i>
            <p>100% ORIGINAL PRODUCTS</p>
          </div>
          <div>
            <i class="fa-solid fa-tag facilities-icon"></i>
            <p>TOP BRANDS</p>
          </div>
          <div>
            <p>Show some love on social media</p>
            <div className="social-links">
              <a href="https://github.com/SudiptaChakraborty51">
                <i class="fa-brands fa-github fa-lg"></i>
              </a>
              <a href="https://twitter.com/Sudipta41158180">
                <i class="fa-brands fa-twitter fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/sudipta-chakraborty-4a371a212/">
                <i class="fa-brands fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div>
            <a href="/">Terms & Condition</a>
            <a href="/">Shipping Policy</a>
            <a href="/">Cancellation Policy</a>
            <a href="/">Privacy Policy</a>
          </div>
          <p>
            Copyright <i class="fa-regular fa-copyright"></i> 2023 Glamour. All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
