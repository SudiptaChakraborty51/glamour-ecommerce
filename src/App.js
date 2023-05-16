import "./App.css";
import Mockman from "mockman-js";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import ProductListing from "./pages/ProductListing/productListing";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
