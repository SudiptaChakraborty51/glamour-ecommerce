import React from "react";
import Slider from "../../components/Slider/slider";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Best in Glamour</h2>
      <Slider />
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
