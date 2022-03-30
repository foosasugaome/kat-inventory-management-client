// import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import UserEdit from './UserEdit'

export default function ManageUsers({ currentUser, users, setUsers }) {

  const [userSearch, setUserSearch] = useState('')
  const [userId, setUserId] = useState('')
  const [showUserEdit, setShowUserEdit] = useState(false)

  const handleUserDelete = async (userId) => {
    // console.log('delete user')
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${userId}`)
      .then(response => {
          console.log(response.data)
          return axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users`)
      }) 
      .then(response => setUsers(response.data))
    } catch (err) {
      console.log(err)
    }
  }
  const handleSelect= (e) => {
        setUserId(e.target.value)
        setShowUserEdit(true)
  }

  const userList = users.map((user, index) => {
    return (
      <tr key={`key-${index}`}>
        {user.firstname.toUpperCase().includes(userSearch) || user.lastname.toUpperCase().includes(userSearch) ?
          <>
            <td>
              {user.lastname}, {user.firstname} 
            </td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            {/* <td className='centered-element'>{user.active ? '✅' : ' '}</td> */}
            <td className='centered-element'>{user.manager ? '✅': ' '}</td>
            <td className='centered-element'>
              { currentUser.manager === true ?
                <>
                  {  user.username === 'admin' ? ' ' : <button value={user._id} onClick={handleSelect}>Edit</button>
                  }
                </>
                :
                <></>
              }
                  {/* <Link to={`/dashboard/${user._id}`}>Edit</Link> */}
            </td>
            {currentUser.username === 'admin' ? 
              <td className='centered-element'>
                {user.username === 'admin' ? ' ' : <button onClick={() => handleUserDelete(user._id)}>Delete</button>}
              </td>
              :
              <></>
            }
          </>
          :
          <></>
        }
      </tr>
    )
  })

  return (
    <>
      <div className='flex-container'>
        <h3>Manage Users</h3>
      </div>
      <div className='flex-container'>
        <input
          type='text'
          placeholder='Filter users by name'
          value={userSearch}
          onChange={e => setUserSearch((e.target.value).toUpperCase())}
        />
      </div>
      <div className='flex-container'>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              {/* <th>Active</th> */}
              <th>Manager</th>
              <th>Edit Role</th>
              {currentUser.username === 'admin' ? <th>Delete User</th> : <></>}
            </tr>
            {userList}
          </tbody>
        </table>
      </div>
      { showUserEdit ?
        <UserEdit currentUser={currentUser} users={users} setUsers={setUsers} userId={userId} setUserId={userId} />
        :
        null
      }
    </>
  )
}
