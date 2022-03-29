import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ManageUsers({ currentUser, users }) {

  const [userSearch, setUserSearch] = useState('')

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
            <td className='centered-element'>{user.active ? '✅' : ' '}</td>
            <td className='centered-element'>{user.manager ? '✅': ' '}</td>
            <td className='centered-element'>
                { currentUser.manager === true ?
                  <>
                    {  user.username === 'admin' ? ' ' : <button><Link to={`/dashboard/${user._id}`}>Edit</Link></button>
                    }
                  </>
                  :
                  <></>
                }
            </td>
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
          type="text"
          placeholder="Filter users by name"
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
              <th>Active</th>
              <th>Manager</th>
              <th>Edit Role</th>
            </tr>
            {userList}
          </tbody>
        </table>
      </div>
    </>
  )
}
