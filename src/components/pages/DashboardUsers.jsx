import { Link } from "react-router-dom"
import { useState, useEffect} from 'react'
import axios from "axios"
import { Navigate } from "react-router-dom"

export default function DashboardUsers({ currentUser, users, setUsers }) {

    // lifted state
    // const [users, setUsers] = useState([])

    let input = ''

    const user = users.map((user, index) => {
        return (
            <div key={`user-key${index}`}>
                <h5>
                    {user.username} - {user.email}

                    {currentUser.username === 'admin' ? 
                        <button><Link to={`/dashboard/users/${user._id}`}>Edit User</Link></button> :
                        null
                    }
                </h5>
            </div>
        )
    })

    return (
        <>
            <h2>Dashboard</h2>
            <h3>Users</h3>
            <h4><Link to={`/dashboard/overview`}>Overview</Link></h4>

            {user}
        </>
    )
}