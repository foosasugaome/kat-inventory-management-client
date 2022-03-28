import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'

export default function Register ({ currentUser, setCurrentUser, setUsers }) {
  const [form, setForm] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
    // manager: false
  })

  const [msg, setMsg] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(
      `${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`,
      form
    )
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`,
        form
      )
      // get the token from the response
      const { token } = response.data
      // set the token in local storage
      localStorage.setItem('jwt', token)
      // decode the token
      const decoded = jwt_decode(token)
      // log the user in
      setCurrentUser(decoded)
      return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users`)
        .then(response => setUsers(response.data))
    } catch (err) {
      if (err.response.status === 409) {
        setMsg(err.response.data.msg)
      } else {
        console.log(err)
      }
    }
  }

  if (currentUser) return <Navigate to='/dashboard/overview' />

  return (
    <>
      <p>{msg}</p>
      <div className='flex-container'>
        <h3>Register An Account</h3>
      </div>
      <div className='tab-container'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
              />
            </p>
            <p>
              <label htmlFor='firstname'>First Name:</label>
              <input
                type='text'
                id='firstname'
                value={form.firstname}
                onChange={e => setForm({ ...form, firstname: e.target.value })}
              />
            </p>
            <p>
              <label htmlFor='lastname'>Last Name:</label>
              <input
                type='text'
                id='lastname'
                value={form.lastname}
                onChange={e => setForm({ ...form, lastname: e.target.value })}
              />
            </p>
            <p>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                value={form.name}
                onChange={e => setForm({ ...form, email: e.target.value })}
                // placeholder='enter your email...'
              />
            </p>
            <p>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                // placeholder='enter your password...'
              />
            </p>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
