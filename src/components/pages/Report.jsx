import { useState } from "react"
import Byproduct from "./report/Byproduct"
export default function Report() {
    const [selectedComponent, setSelectedComponent] = useState('0')
    
    return (
        <>
       {/* <div className='flex-container'>
        <h3>Reports</h3>
      </div> */}
       <div className='flex-menu-container'>
        <div>
          <button onClick={() => setSelectedComponent('0')}  className={selectedComponent === '0' ? 'button-nav-selected' : 'button-nav'}> By Product </button>
        </div>
        <div>
          <button onClick={() => setSelectedComponent('1')}  className={selectedComponent === '1' ? 'button-nav-selected' : 'button-nav'}> Show All </button>
        </div>        
      </div>
      
      {
        selectedComponent === '0' ? <Byproduct /> : null
      }
      {/* {
        selectedComponent === '0' ? <AddMedicine inventoryList={inventoryList} setInventoryList={setInventoryList}/> : null
      }       */}
        </>
    )
}