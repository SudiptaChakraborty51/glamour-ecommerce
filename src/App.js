import "./App.css";
import Mockman from "mockman-js";

import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import ProductListing from "./pages/ProductListing/productListing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/mockman" element={<Mockman />}/>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />}/>
      </Routes>
    </div>
  );
}

export default App;
