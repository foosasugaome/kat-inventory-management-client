import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users () {
  const [users, setUsers] = useState([])
  useEffect(() => {
    ;(async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/users`
      )
      setUsers(res.data)
    })()
  }, [])

  const userList = users.map((user, index) => {
    // if (user.username === 'admin') return <></>
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
            }</td>
        <td className='centered-element'>
            {  user.username === 'admin' ? ' ' : <button>Edit</button>
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
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Active</th>
            <th>Manager</th>
            <th>Edit</th>
          </tr>
          {userList}
        </table>
      </div>
    </>
  )
}