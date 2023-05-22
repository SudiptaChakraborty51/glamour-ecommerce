import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import ProductProvider from "./contexts/productContext";
import FilterProvider from "./contexts/filterContext";
import AuthProvider from "./contexts/authContext";
import OrderProvider from "./contexts/orderContext";

import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <OrderProvider>
        <AuthProvider>
          <ProductProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </ProductProvider>
        </AuthProvider>
      </OrderProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
