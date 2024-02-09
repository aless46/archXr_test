import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StaticCube from "./components/StaticCube";
import HouseTest from "./components/HouseTest";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StaticCube" element={<StaticCube />} />
        <Route path="/House" element={<HouseTest />} />
      </Routes>
    </Router>
  );
}

export default App;

