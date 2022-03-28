// import { Link } from "react-router-dom"
import { useState, useEffect} from 'react'
import axios from "axios"
import { Navigate } from "react-router-dom"

export default function Overview({ currentUser }) {

    const [inventories, setInventories] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory`)            
            setInventories(response.data)
            
        })()        
    }, [])

    const inventory = inventories.map((inventory, index) => {
        return (
            <div key={`id-${index}`}>
                <h2>Brand: {inventory.brandName}</h2>
                <h4>Stock: {inventory.unitCount}</h4>
                <h4>Generic Name : {inventory.genericName}</h4> 
                <h4>Manufacturer: {inventory.manufacturerName}</h4>
                <h4>Product Type: {inventory.productType}</h4>
                <h4>Route: {inventory.route}</h4>    
            </div>
        )
    })
    // if (!currentUser) return <Navigate to="/login" />
    return (
        <>
        {/* <div className="flex-container">
            <h2>Dashboard</h2>
            <h4>Overview - <Link to={`/dashboard/users`}>Users</Link></h4> */}
            
        {/* </div> */}
        {inventory}
        </>

    )
}