import { useState, useEffect } from 'react'
import axios from "axios"
import AddMedicine from "./inventory/AddMedicine"
import ManageInventory from "./inventory/ManageInventory"

// import SearchApi from '../SearchApi'
import Transaction from './inventory/Transaction'

export default function Inventory ({ currentUser }) {
    const [selectedComponent, setSelectedComponent] = useState('0')
    const [inventoryList, setInventoryList] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [refresher, setRefresher] = useState(false) //only purpose is to update the useEffect(justin)

//I moved this useEffect from DrugList to Inventory.jsx so I can pass it down to it's children components.
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory`)
          .then(response => {
              setInventoryList(response.data)
          })
  },[refresher])

    
  return (
    <>      
      <div className='flex-menu-container'>
        <div>
          <button onClick={() => setSelectedComponent('0')}  className={selectedComponent === '0' ? 'button-nav-selected' : 'button-nav'}> Add Product </button>
        </div>
        <div>
          <button onClick={() => setSelectedComponent('1')}  className={selectedComponent === '1' ? 'button-nav-selected' : 'button-nav'}> Manage Inventory </button>
        </div>
        
      </div>
      <div className='tab-container'>

      {
        selectedComponent === '0' ? <AddMedicine inventoryList={inventoryList} setInventoryList={setInventoryList}/> : null
      }      
      {
        selectedComponent === '1' ? <ManageInventory inventoryList={inventoryList} showForm={showForm} refresher={refresher} setRefresher={setRefresher} setShowForm={setShowForm} setInventoryList={setInventoryList} setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} /> : null
        
      }
      {
        selectedComponent === '2' ? <Transaction currentUser={currentUser} /> : null
      }   
      </div>
    </>
  )
}
