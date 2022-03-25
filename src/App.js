import { useState, useEffect } from "react"
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import About from './components/pages/About'
import DrugList from "./components/pages/DrugList"
import Navibar from "./components/layout/Navibar"
import Footer from "./components/layout/Footer"
import axios from "axios"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<DrugList />} />
        {/* <Route path="/search" element={</> */}
      </Routes>
    </div>
  );
}

export default App;
