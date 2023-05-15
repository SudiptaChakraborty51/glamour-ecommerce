import "./App.css";
import Mockman from "mockman-js";

import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/mockman" element={<Mockman />}/>
      </Routes>
    </div>
  );
}

export default App;
