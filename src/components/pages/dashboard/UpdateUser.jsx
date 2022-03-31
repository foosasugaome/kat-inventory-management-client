import { useState } from 'react'
import axios from 'axios'

export default function UpdateUser ({ currentUser, users, setUsers }) {
  const [form, setForm] = useState({ 
    firstname : currentUser.firstname,
    lastname: currentUser.lastname,
    password:''
   })
  const [userId, setUserId] = useState('')
 

  const handleSubmit = async e => {
    e.preventDefault()
    
    try {
      await axios
        .put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${userId}`, form)
        .then(response => {
          setForm({
            firstname: '',
            lastname: '',
            password: ''
            
          })
          currentUser.firstname = form.firstname
          currentUser.lastname = form.lastname
          return axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users`)
        })
        .then(response => setUsers(response.data))
    } catch (err) {
      console.log(err)
    }
  }

  const userList = users.map((user, index) => {
    return (
      <div key={`user-key${index}`}>
        {currentUser.id === user._id ? (
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='firstname'>First Name:</label>
                <input
                  type='text'
                  id='firstname'
                  value={form.firstname}
                  placeholder={currentUser.firstname}
                  onChange={e =>
                    setForm({ ...form, firstname: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor='lastname'>Last Name:</label>
                <input
                  type='text'
                  id='lastname'
                  value={form.lastname}
                  placeholder={currentUser.lastname}
                  onChange={e => setForm({ ...form, lastname: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor='password'>Password:</label>
                <input
                  type='password'
                  id='password'
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>
              <div>
                <p>
                  <button type='submit' onClick={e => setUserId(user._id)}>
                    Submit
                  </button>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
    )
  })

  return (
    <>
      <div className='flex-container'>
        <h3>Update Info</h3>

        <div className='flex-container'>
          Please enter information in all fields
        </div>
        {userList}
      </div>
    </>
  )
}
