import Search from "../Search";
import InventoryList from "./inventory/InventoryList";
import axios from "axios"
import { useEffect, useState } from "react"

export default function Inventory() {
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}`)
            .then(response => {
                setInventory(response.data)
            })
    },[])
    return(
        <>
        <div className="flex-container">
        Inventory Landing Page
        </div>
        <div className="flex-container">
            <Search />
            <InventoryList inventory={inventory} />
        </div>
        </>
    )
}