import { Link } from 'react-router-dom'

export default function ManageUsers({ currentUser, users }) {

  const userList = users.map((user, index) => {
    return (
      <tr key={`key-${index}`}>
        <td>
          {user.firstname} {user.lastname}
        </td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td className='centered-element'>{
              user.active ? '✅' : ' '
            }
        </td>
        <td className='centered-element'>{
              user.manager ? '✅': ' ' 
            }
        </td>
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
      </tr>
    )
  })

  return (
    <>
      <div className='flex-container'>
        <h3>Manage Users</h3>
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
