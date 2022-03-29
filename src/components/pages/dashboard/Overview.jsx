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
            <tr key={`id-${index}`}>
                <td>{inventory.brandName}</td>
                <td>{inventory.unitCount}</td>
            </tr>
        )
    })

    const lowStock = inventories.map((inventory, index) => {
        return (
            <tr key={`id-${index}`}>
                {inventory.unitCount < 11 ? 
                    <>
                        <td>{inventory.brandName}</td>
                        <td>{inventory.unitCount}</td>
                    </>
                    :
                    <></>
                }
            </tr>
        )
    })
    
    console.log(inventory)

    if (!currentUser) return <Navigate to="/login" />

    return (
        <div>
            <div className='flex-container'>
                <h3>Low Stock Inventory</h3>
            </div>
            <div className='flex-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Stock</th>
                        </tr>
                        {lowStock}
                    </tbody>
                </table>
            </div>

            <div className='flex-container'>
                <h3>All Inventory</h3>
            </div>
            <div className='flex-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Stock</th>
                        </tr>
                        {inventory}
                    </tbody>
                </table>
            </div>
        </div>

    )
}