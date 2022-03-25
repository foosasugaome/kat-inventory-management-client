import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import About from './components/pages/About'
// import InventoryList from ".components/pages/InventoryList"
import Navibar from "./components/layout/Navibar"
import Footer from "./components/layout/Footer"
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => { 
    const token = localStorage.getItem('jwt')
    if (token) {
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, [])

  const handleLogout = () => {
    if (localStorage.getItem('jwt')) localStorage.removeItem('jwt')
    setCurrentUser(null)
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="" element={<InventoryList />} /> */}
        <Route path="/register" element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
