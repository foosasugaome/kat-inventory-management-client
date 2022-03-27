import { Link } from "react-router-dom"
import { useState, useEffect} from 'react'
import axios from "axios"
import { Navigate } from "react-router-dom"

export default function DashboardOverview({ currentUser, handleLogout }) {

    const [inventories, setInventories] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory`)
            .then(response => {
                setInventories(response.data)
            })
            .catch(console.log)
    }, [])

    const inventory = inventories.map((inventory, index) => {
        return (
            <div>
                <h2>Brand: {inventory.brandName}</h2>
                <h4>Stock: </h4>
                {/* <h4>{inventory.genericName}</h4> */}
                {/* <h4>Manufacturer: {inventory.manufacturerName}</h4>
                <h4>Product Type: {inventory.productType}</h4>
                <h4>Route: {inventory.route}</h4> */}
                {/* <h4>{inventory.transactions}</h4> */}
            </div>
        )
    })

    if (!currentUser) return <Navigate to="/login" />

    return (
        <>
            <h2>Dashboard</h2>
            <h4>Overview - <Link to={`/dashboard/users`}>Users</Link></h4>
            {inventory}
        </div>
        </>

    )
}