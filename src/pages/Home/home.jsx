import React from "react";
import Slider from "../../components/Slider/slider";
import "./home.css";
import summer from "../../assets/summer.jpg";
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
          <button><span>Shop Now</span></button>
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
    </div>
  );
};

export default Home;
