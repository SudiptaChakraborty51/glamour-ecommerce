import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { categories } from "../../backend/db/categories";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top-navbar">
        <p>Get Exclusive offers on your favourite products</p>
      </div>
      <nav>
        <div>
          <NavLink to="/" className="nav-link"><h1>GLAMOUR</h1></NavLink>
        </div>
        <div className="right-nav">
          <div className="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search on Glamour" />
          </div>
          <div className="nav-icons">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>
      <div className="bottom-navbar">
        {
          categories?.map(({_id, categoryName}) =>  <NavLink className="navlink" key={_id}>{categoryName}</NavLink>)
        }
        <NavLink className="navlink">Offers</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
