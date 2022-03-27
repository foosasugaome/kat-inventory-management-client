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
import EditMedicine from './components/pages/EditMedicine'
import UserEdit from './components/pages/UserEdit'
import axios from 'axios'



function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])

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

  // lifted state and combined the useEffects into 1
  // const [users, setUsers] = useState([])
  // useEffect(() => {
  //     axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users`)
  //         .then(response => {
  //             setUsers(response.data)
  //         })
  //         .catch(console.log)
  // }, [])


  return (
    <>
    <BrowserRouter>
    <Navigation handleLogout={handleLogout}/>
      <Layout>
      <Routes>        
        <Route path='/' element={<Home />} />
        <Route path='/medicine/add' element={<AddMedicine />} />
        {/* just input a random number to reach the edit page. Need access to medicine list in backend to get actual id. */}
        <Route path='/medicine/:id/edit' element={<EditMedicine />} />
        <Route path="/search" element={<DrugList />} />
        <Route path='/about' element={<About />} />
        <Route path="/register" element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} setUsers={setUsers} />} />
        <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/dashboard/overview" element={<DashboardOverview currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/dashboard/users" element={<DashboardUsers currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUsers={setUsers} />} />
        <Route path="/dashboard/users/:id" element={<UserEdit currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUser={setUsers} />} />
      </Routes>      
      </Layout>
    </BrowserRouter>
    </>
  );
}
export default App
