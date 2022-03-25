import { Link } from "react-router-dom"
import { useState, useEffect} from 'react'
import axios from "axios"

export default function DashboardOverview({ handleLogout }) {

    const [inventory, setInventory] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/overview`)
            .then(response => {
                setInventory(response.data)
                // return axios.get(process.env.REACT_APP_SERVER_URL + '/blog')
            })
            // .then(response => setBlogs(response.data)) // this is changing the parent state, which causes the re-render
            .catch(console.log)
    }, [])

    return (
        <div className="main">
            <h2>Dashboard</h2>
            <h3>Overview</h3>
            <h4><Link to={`/dashboard/users`}>Users</Link></h4>
            <h4>
                <Link to="/">
                    {/* todo: app function to logout */}
                    <span onClick={handleLogout}>log out</span>
                </Link>
            </h4>
        </div>
    )
}