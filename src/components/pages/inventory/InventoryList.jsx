import React from 'react'
import axios from "axios"
import DrugList from '../DrugList'

const InventoryList = ({inventory}) => {
  
  const allInventory = inventory.map((drug, idx) => {
    return(
      <section>
        <h3>{drug.genericName}</h3>
      </section>
    )
  })
  return (
    <div>
      {allInventory}
    </div>
  )
}

export default InventoryList