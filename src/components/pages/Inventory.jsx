import { useState, useEffect } from 'react'
import Search from '../Search'
import axios from "axios"
import AddMedicine from "./inventory/AddMedicine"
import EditMedicine from "./inventory/EditMedicine"
import DrugList from "./inventory/DrugList"



export default function Inventory () {
    const [selectedComponent, setSelectedComponent] = useState('0')
    const [searchResults, setSearchResults] = useState([])
    const [search, setSearch] = useState("paracetamol")
    const [inventoryList, setInventoryList] = useState([])

    const [medicineToEdit, setMedicineToEdit] = useState({}) //this is where I'll store the medicine to edit including it's id.

//I moved this useEffect from DrugList to Inventory.jsx so I can pass it down to it's children components.
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory`)
          .then(response => {
              setInventoryList(response.data)
              // console.log(response.data)
          })
  },[])

    
  return (
    <>
      <div className='flex-container'>
        <h3>Inventory</h3>
      </div>
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
      <Search />


{/* Had to do multiple ternaries since ternaries only take 2 conditions (Justin) */}
      {
        selectedComponent == 0 ? <AddMedicine inventoryList={inventoryList} setInventoryList={setInventoryList}/> : null
      }
      {
        selectedComponent == 1 ? <EditMedicine medicineToEdit={medicineToEdit} setMedicineToEdit={setMedicineToEdit}/> : null
      }
      {
        selectedComponent == 2 ? <DrugList inventoryList={inventoryList} setMedicineToEdit={setMedicineToEdit} setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} /> : null
      }
   
      </div>
    </>
  )
}
