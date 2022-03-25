import { Link } from "react-router-dom"
import { useState, useEffect} from 'react'
import axios from "axios"

export default function DashboardUsers() {

    const [users, setUsers] = useState([])
    const [showUsers, setShowUsers] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users`)
            .then(response => {
                setUsers(response.data)
            })
            .catch(console.log)
    }, [])

    const user = users.map((user, index) => {
        return (
            <div key={`user-key${index}`}>
                <h5>
                    {user.username} - {user.email}
                    <button>Assign Role</button>
                </h5>
                
            </div>
        )
    })

    return (
        <div className="main">
            <h2>Dashboard</h2>
            <h3>Users</h3>
            <h4><Link to={`/dashboard/overview`}>Overview</Link></h4>

            {user}
        </div>
    )
}