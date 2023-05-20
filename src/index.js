import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

import ProductProvider from "./contexts/productContext";
import FilterProvider from "./contexts/filterContext";
import AuthProvider from "./contexts/authContext";
import CartProvider from "./contexts/cartContext";
import WishlistProvider from "./contexts/wishlistContext";

import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <WishlistProvider>
            <CartProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </CartProvider>
          </WishlistProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
