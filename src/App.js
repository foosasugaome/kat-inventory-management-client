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
import Report from './components/pages/Report';
import Purchases from './components/pages/Purchases';
import Sales from './components/pages/Sales';
import Error from './components/pages/Error';
import Contact from './components/pages/Contact';


function App() {

  const [currentUser, setCurrentUser] = useState({
    email: '',
    firstname: '',
    lastname: '',
    manager: false,
    username: ''
  })
  const [users, setUsers] = useState([])
  // const [currentUserId, setCurrentUserId] = useState('')

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
        <Navigation handleLogout={handleLogout} isLogged={(currentUser)} currentUser={currentUser}/>
        <Layout>
          <Routes>       
            <Route path='/' element={<Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUsers={setUsers} />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUsers={setUsers} />} />
            <Route path="/dashboard/:id" element={<UserEdit currentUser={currentUser} users={users} setUsers={setUsers} />} />
            <Route path='/inventory' element={<Inventory currentUser={currentUser} />}/>                
            <Route path='/sales' element={<Sales currentUser={currentUser} />}/>
            <Route path='/purchases' element={<Purchases currentUser={currentUser} />}/>
            <Route path='/report' element={<Report />} />        
            <Route path="/register" element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} setUsers={setUsers} />} />
            <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
            <Route path="*" element={<Error />} />     
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
export default App
