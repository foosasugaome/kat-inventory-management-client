import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import DrugList from "./components/pages/DrugList"
import Navigation from './components/layout/Navigation'
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import Layout from './components/layout/Layout'
import Home from './components/pages/Home'
import DashboardOverview from './components/pages/DashboardOverview';
import DashboardUsers from './components/pages/DashboardUsers';
import AddMedicine from './components/pages/AddMedicine'



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
    <>
    <BrowserRouter>
    <Navigation />
      <Layout>
      <Routes>        
        <Route path='/' element={<Home />} />
        <Route path='/add-medicine' element={<AddMedicine />} />
        <Route path="/search" element={<DrugList />} />
        <Route path='/about' element={<About />} />
        <Route path="/register" element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/dashboard/overview" element={<DashboardOverview handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/dashboard/users" element={<DashboardUsers currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      </Routes>      
      </Layout>
    </BrowserRouter>
    </>
  );
}
export default App
