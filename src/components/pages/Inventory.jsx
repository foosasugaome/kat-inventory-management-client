import { useState, useEffect } from 'react'
import axios from "axios"
import AddMedicine from "./inventory/AddMedicine"
import EditMedicine from "./inventory/EditMedicine"

import SearchApi from '../SearchApi'
import Transaction from './inventory/Transaction'

export default function Inventory ({ currentUser }) {
    const [selectedComponent, setSelectedComponent] = useState('0')
    const [inventoryList, setInventoryList] = useState([])
    const [showForm, setShowForm] = useState(false)

    const [medicineToEdit, setMedicineToEdit] = useState({}) //this is where I'll store the medicine to edit including it's id.

//I moved this useEffect from DrugList to Inventory.jsx so I can pass it down to it's children components.
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory`)
          .then(response => {
              setInventoryList(response.data)
          })
  },[showForm])

    
  return (
    <>
      {/* <div className='flex-container'>
        <h3>Inventory</h3>
      </div> */}
      <div className='flex-menu-container'>
        <div>
          <button onClick={() => setSelectedComponent('0')}  className={selectedComponent === '0' ? 'button-nav-selected' : 'button-nav'}> Add Product </button>
        </div>
        <div>
          <button onClick={() => setSelectedComponent('1')}  className={selectedComponent === '1' ? 'button-nav-selected' : 'button-nav'}> Edit Product </button>
        </div>
        <div>
          <button onClick={() => setSelectedComponent('2')}  className={selectedComponent === '2' ? 'button-nav-selected' : 'button-nav'}> Manage Inventory </button>
        </div>
      </div>
      <div className='tab-container'>
      {/* <Search />g */}


{/* Had to do multiple ternaries since ternaries only take 2 conditions (Justin) */}
      {
        selectedComponent === '0' ? <SearchApi currentUser={{currentUser}}/> : null
      }
      {
        selectedComponent === '0' ? <AddMedicine inventoryList={inventoryList} setInventoryList={setInventoryList}/> : null
      }      
      {
        selectedComponent === '1' ? <EditMedicine inventoryList={inventoryList} showForm={showForm} setShowForm={setShowForm} setInventoryList={setInventoryList} medicineToEdit={medicineToEdit} setMedicineToEdit={setMedicineToEdit} setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} /> : null
        
      }
      {
        selectedComponent === '2' ? <Transaction /> : null
      }   
      </div>
    </>
  )
}
