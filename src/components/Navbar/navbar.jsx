import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/productContext";
import { FilterContext } from "../../contexts/filterContext";
import { AuthContext } from "../../contexts/authContext";

const Navbar = () => {
  const { productState } = useContext(ProductContext);
  const { filterDispatch } = useContext(FilterContext);
  const { authState } = useContext(AuthContext);

  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    filterDispatch({ type: "SEARCH", payload: searchText });
  }, [searchText, filterDispatch]);

  return (
    <div className="navbar">
      <div className="top-navbar">
        <p>Get Exclusive offers on your favourite products</p>
      </div>
      <nav>
        <div>
          <NavLink to="/" className="nav-link">
            <h1>GLAMOUR</h1>
          </NavLink>
        </div>
        <div className="right-nav">
          <div className="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              placeholder="Search on Glamour"
              value={searchText}
              type="search"
              name="search"
              onChange={(e) => {
                setSearchText(e.target.value);
                e.target.value.trim() !== "" && navigate("/products");
              }}
            />
          </div>
          <div className="nav-icons">
            <NavLink to="/products">
              <i class="fa-solid fa-bag-shopping"></i>
            </NavLink>
            <NavLink to="/cart" className="icon-navlink">
              <i class="fa-solid fa-cart-shopping"></i>
              {productState?.cart?.length > 0 && (
                <span className="icon-badge">{productState?.cart?.length}</span>
              )}
            </NavLink>
            <NavLink to="/wishlist" className="icon-navlink">
              <i class="fa-solid fa-heart"></i>
              {productState?.wishlist?.length > 0 && (
                <span className="icon-badge">
                  {productState?.wishlist?.length}
                </span>
              )}
            </NavLink>
            <NavLink
              to={authState?.isLoggedIn ? "/account-details" : "/login"}
              className={authState?.isLoggedIn ? "login-user" : ""}
            >
              {authState?.isLoggedIn ? (
                authState?.user.firstName
              ) : (
                <i class="fa-solid fa-user"></i>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="bottom-navbar">
        {productState?.categories?.map(({ _id, categoryName }) => (
          <NavLink
            className="navlink"
            key={_id}
            to="/products"
            onClick={() => {
              filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
              filterDispatch({
                type: "SET_CATEGORY_FILTER",
                payload: categoryName,
              });
            }}
          >
            {categoryName}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
