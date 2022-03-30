import { useState, } from 'react'
import SalesList from './inventory/SalesList'
import SalesTransaction from './inventory/SalesTransaction'
export default function Sales({ currentUser }) {
  const [selectedComponent, setSelectedComponent] = useState('0')  
    return(
        <>
       <div className='flex-menu-container'>
        <div>
          <button onClick={() => setSelectedComponent('0')}  className={selectedComponent === '0' ? 'button-nav-selected' : 'button-nav'}> Sales </button>
        </div>
        <div>
          <button onClick={() => setSelectedComponent('1')}  className={selectedComponent === '1' ? 'button-nav-selected' : 'button-nav'}> Add Sale </button>
        </div>
        {/* <div>
          <button onClick={() => setSelectedComponent('2')}  className={selectedComponent === '2' ? 'button-nav-selected' : 'button-nav'}> Manage Inventory </button>
        </div> */}
      </div>

      <div className='tab-container'>      
      {
        selectedComponent === '0' ? <SalesList currentUser={{currentUser}}/> : null
      }
      {
        selectedComponent === '1' ? <SalesTransaction currentUser={currentUser}/> : null
      }   
      </div>
        </>
    )
}