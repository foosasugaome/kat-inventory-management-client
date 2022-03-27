import { Link } from "react-router-dom"
import { useState, useEffect} from 'react'
import axios from "axios"
import { Navigate } from "react-router-dom"

export default function DashboardUsers({ currentUser, users, setUsers }) {

    const user = users.map((user, index) => {
        // don't display admin as a user so that manager privileges cannot be changed
        if (user.username === 'admin') {
            return
        }
        return (
            <div key={`user-key${index}`}>
                <h5>
                    {user.username} - {user.email}
                    {currentUser.manager === true ? 
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
            <h4><Link to={`/dashboard/overview`}>Overview</Link> - Users</h4>

            {user}
        </>
    )
}