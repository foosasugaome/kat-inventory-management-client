import { useEffect, useState } from "react"
import axios from 'axios'

export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users`)            
            setUsers(res.data)            
        })()
    },[])
    
    const userList = users.map((user, index) => {
        if(user.username === 'admin') return <></>
        return (            
            <tr key={`key-${index}`}>
                <td>
                {user.firstname} {user.lastname}
                </td>
                <td>
                {user.username}
                {user.email}
                </td>
            </tr>            
        )
    })
    return (
        <>
        <div className="flex-container"><h3>Manage Users</h3></div>
        <div className="flex-container">
        <table>
            <tr>
                <td>Name</td><td>Username</td></tr>
            {userList}
        </table>
        </div>
        
        </>
    )
}