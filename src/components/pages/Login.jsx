import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'

export default function Login ({ currentUser, setCurrentUser }) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const [message, setMessage] = useState('')
//   console.log(form.email)

  const handleFormSubmit = async e => {
    e.preventDefault()
    try {
      
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`,
        form)
        
    
      // decode the token that is sent to me
      const { token } = response.data
      const decoded = jwt_decode(token)
    //   console.log(decoded)

      // save the token in localStorage
      localStorage.setItem('jwt', token)

      // sets the app state to the logged in user
      setCurrentUser(decoded)

    } catch (err) {
      console.log(err)
      if(err.response.status === 409 || err.response.status === 406) {
            // console.log(err.response.data)
            setMessage('Invalid login credentials.')
            // console.log(err.response.data.message)
        }
      
    //   console.log(message)
    }
  }


  if (currentUser) return <Navigate to='/dashboard' />

  return (
    <>
    <p>{message}</p>
    <div className='flex-container'><h3>Login</h3></div>      
    <div className='tab-container'>    
        <div className='form-container'>        
        <form onSubmit={handleFormSubmit}>
          <p>
            <label htmlFor='username'>Username:</label>         
            <input
              id='username'
              type='text'
              onChange={e => setForm({ ...form, username: e.target.value })}
              value={form.username}
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
          <button type='submit'>Submit</button>
        </form>        
        <p>{message ? `${message}` : ''}</p>
      
      </div>
      </div>
    </>
  )
}
