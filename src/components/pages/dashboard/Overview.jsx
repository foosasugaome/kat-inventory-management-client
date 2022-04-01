import { useState, useEffect} from 'react'
import axios from "axios"
import { Navigate } from "react-router-dom"

export default function Overview({ currentUser }) {
    
    const [inventories, setInventories] = useState([])
    const [searchTextStock, setSearchTextStock] = useState('')
    const [searchTextAll, setSearchTextAll] = useState('')
    const [stockCount, setStockCount] = useState(10000)

    let today = new Date();
    let time = today.getHours()

    useEffect(() => {
        (async () => {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory`)           
            setInventories(response.data)                                    
        })()        
    }, [])
    
    const searchedLow = inventories.map((inventory, index) => {
        return (
            <tr key={`id-${index}`}>
                {inventory.brandName.toUpperCase().includes(searchTextStock) ?
                    <>
                        {inventory.unitCount < stockCount ? 
                            <>
                                <td>{inventory.brandName}</td>
                                <td className='right-align'>{inventory.unitCount.toLocaleString("en-us")}</td>
                            </>
                            :
                            <></>
                        }
                    </>
                    :
                    <></>
                }
            </tr>
        )
    })

    const searched = inventories.map((inventory, index) => {
        return (
            <tr key={`id-${index}`}>
                {inventory.brandName.toUpperCase().includes(searchTextAll) ?
                    <>
                        <td>{inventory.brandName}</td>
                        <td className='right-align'>{inventory.unitCount.toLocaleString("en-us")}</td>
                    </>
                    :
                    <></>
                }
            </tr>
        )
    })

    if (!currentUser) return <Navigate to="/login" />

    return (
        <>        
            <div className='greeting'>
                { time > 3 && time < 12 ? <p className='greeting'>Good Morning, {currentUser.firstname.toUpperCase()}</p> : <></>}
                { time > 11 && time < 18 ? <p className='greeting'>Good Afternoon, {currentUser.firstname.toUpperCase()}</p> : <></>}
                { time > 17 || time < 4 ? <p className='greeting'>Good Evening, {currentUser.firstname.toUpperCase()}</p> : <></>}
            </div>

            <div className='flex-container'>
                <h3>All Inventory</h3>
            </div>
            <div className='flex-container'>
                <input
                    type="text"
                    placeholder="Filter inventory by name"
                    value={searchTextAll}
                    onChange={e => setSearchTextAll((e.target.value).toUpperCase())}
                />
            </div>
            <div className='flex-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Stock</th>
                        </tr>
                        {searched}
                    </tbody>
                </table>       
            </div>

            <div className='flex-container overview'>
                <h3>Filter Inventory By Stock Count</h3>
            </div>
            <div className='flex-container'>
                {/* <p>Name:</p> */}
                <input
                    type="text"
                    placeholder="Filter inventory by name"
                    value={searchTextStock}
                    onChange={e => setSearchTextStock((e.target.value).toUpperCase())}
                />
                <p>Stock count Less than:</p>
                <input type='number' value={stockCount} onChange={e => setStockCount(e.target.value)}/>
                {/* <input
                    type="text"
                    placeholder="Filter inventory by name"
                    value={searchTextStock}
                    onChange={e => setSearchTextStock((e.target.value).toUpperCase())}
                /> */}
            </div>
            <div className='flex-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Stock</th>
                        </tr>
                        {searchedLow}
                    </tbody>
                </table>
            </div>
        </>
    )
}