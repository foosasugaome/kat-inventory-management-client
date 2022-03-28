import { useState } from 'react'
import Search from '../Search'
import About from './About'
import AddMedicine from "./inventory/AddMedicine"
import EditMedicine from "./inventory/EditMedicine"
import DrugList from "./inventory/DrugList"



export default function Inventory () {
    const [selectedComponent, setSelectedComponent] = useState('0')
    // const [currentComponent, setCurrentComponent] = useState()

    // let currentComponent;
    // const getSelectedComponent = (num) => {
    //   setSelectedComponent(num)
    //   if (selectedComponent === "0") {
    //     console.log(currentComponent)
    //     return  <AddMedicine />
        
    //   } else if (selectedComponent === "1") {
    //     console.log(currentComponent)
    //   currentComponent = <EditMedicine />
    //   } else {
    //     console.log(currentComponent)
    //     currentComponent = <About />
    //   }
    // }

    // let currentComponent = function () {
    //   if(selectedComponent == 0) {
    //     return <AddMedicine />
    //   } else if (selectedComponent == 2) {
    //     return <EditMedicine />
    //   } else {
    //     return null
    //   }
    // }

    
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
        selectedComponent == 0 ? <AddMedicine /> : null
      }
      {
        selectedComponent == 1 ? <EditMedicine /> : null
      }
      {
        selectedComponent == 2 ? <DrugList /> : null
      }
   
      </div>
    </>
  )
}
