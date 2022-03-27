import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'

export default function Login ({ currentUser, setCurrentUser }) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const [msg, setMessage] = useState('')

  const handleFormSubmit = async e => {
    e.preventDefault()
    try {
      console.log(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`)
      // post to the backend with the form data to login
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`,form)
      console.log(response.data)
      // decode the token that is sent to use
      const { token } = response.data
      const decoded = jwt_decode(token)
      // save the token in localstorage
      localStorage.setItem('jwt', token)
      // set the app state to the logged in user
      setCurrentUser(decoded)
      console.log(response.data)
    } catch (err) {
      // handle errors suchs as wrong credentials
      if (err.response.status === 409) {
        console.log(err.response.data)
        setMessage(err.response.data.msg)
      }
      console.log(err)
    }
  }

  if (currentUser) return <Navigate to='/dashboard/overview' />

  return (
    <>
    <div className='flex-container'><h3>Login</h3></div>
      <div className='flex-container'>
        
        <div className='form-container'>
        {/* <p>{msg ? `the server has a message for you: ${msg}` : ''}</p> */}
        <form onSubmit={handleFormSubmit}>
          <p>
            <label htmlFor='username'>Username:</label>         
            <input
              id='username'
              type='text'
              onChange={e => setForm({ ...form, username: e.target.value })}
              value={form.email}
              required
            />
          </p>
          <p>
            <label htmlFor='password'>Password:</label>          
            <input
              id='password'
              type='password'
              onChange={e => setForm({ ...form, password: e.target.value })}
              value={form.password}
              required
            />
          </p>
          <input type='submit' />
        </form>        
        </div>
      </div>
    </>
  )
}
