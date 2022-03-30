import { useState } from 'react'
import Transaction from './inventory/Transaction'
import PurchasesList from './inventory/PurchasesList'

export default function Purchases({ currentUser }) {
  const [selectedComponent, setSelectedComponent] = useState('0')
    return(
        <>
       <div className='flex-menu-container'>
        <div>
          <button onClick={() => setSelectedComponent('0')}  className={selectedComponent === '0' ? 'button-nav-selected' : 'button-nav'}> Purchases </button>
        </div>
        <div>
          <button onClick={() => setSelectedComponent('1')}  className={selectedComponent === '1' ? 'button-nav-selected' : 'button-nav'}> Add Purchase </button>
        </div>        
      </div>

      <div className='tab-container'>      
      {
        selectedComponent === '0' ? <PurchasesList currentUser={{currentUser}}/> : null
      }
      {
        selectedComponent === '1' ? <Transaction currentUser={currentUser}/> : null
      }   
      </div>
        </>
    )
}