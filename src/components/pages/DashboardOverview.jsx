import { Link } from "react-router-dom"
import { useState, useEffect} from 'react'
import axios from "axios"
import { Navigate } from "react-router-dom"

export default function DashboardOverview({ currentUser, handleLogout }) {

    const [inventory, setInventory] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory`)
            .then(response => {
                setInventory(response.data)
            })
            .catch(console.log)
    }, [])

    // const singleInventory = inventory.map()

    if (!currentUser) return <Navigate to="/login" />

    return (
        <>
            <h2>Dashboard</h2>
            <h3>Overview</h3>
            <h4><Link to={`/dashboard/users`}>Users</Link></h4>
            <h4>
                <Link to="/">
                    {/* todo: app function to logout */}
                    <span onClick={handleLogout}>Logout</span>
                </Link>
            </h4>
        </>
    )
}