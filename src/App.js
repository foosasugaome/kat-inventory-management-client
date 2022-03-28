import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Navigation from './components/layout/Navigation'
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import Layout from './components/layout/Layout'
import axios from 'axios'
import Inventory from './components/pages/Inventory'
import Dashboard from './components/pages/Dashboard'
import UserEdit from './components/pages/dashboard/UserEdit';
import SearchApi from './components/SearchApi';


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])
  const [currentUserId, setCurrentUserId] = useState('')

  useEffect(() => { 
    const token = localStorage.getItem('jwt')
    if (token) {
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users`)
    .then(response => {
        setUsers(response.data)
    })
    .catch(console.log)
  }, [])

  const handleLogout = () => {
    if (localStorage.getItem('jwt')) localStorage.removeItem('jwt')
    setCurrentUser(null)
    
  }

  return (
    <>
    <BrowserRouter>
    <Navigation handleLogout={handleLogout} isLogged={(currentUser)} />
      <Layout>
      <Routes>       
       
        <Route path='/' element={<About />} />
        <Route path="/dashboard" element={<Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} currentUserId={currentUserId} setCurrentUserId={setCurrentUserId}/>} />
        <Route path="/dashboard/:id" element={<UserEdit currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUsers={setUsers} />} />
        <Route path='/inventory' element={<Inventory />}/>                
        <Route path='/about' element={<About />} />     
        <Route path="/register" element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} setUsers={setUsers} />} />
        <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path='/searchapi' element={<SearchApi />} />
      
      </Routes>      
      </Layout>
    </BrowserRouter>
    </>
  );
}
export default App
