import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import About from './components/pages/About'
// import InventoryList from ".components/pages/InventoryList"
import Navibar from "./components/layout/Navibar"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="" element={<InventoryList />} /> */}
      </Routes>
    </div>
  );
}

export default App;
