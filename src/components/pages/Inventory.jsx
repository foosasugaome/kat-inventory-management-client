import { useState } from 'react'
import Search from '../Search'
import InventoryList from './inventory/InventoryList'

export default function Inventory () {
    const [selectedComponent, setSelectedComponent] = useState('0')
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
        <InventoryList />
      </div>
    </>
  )
}
