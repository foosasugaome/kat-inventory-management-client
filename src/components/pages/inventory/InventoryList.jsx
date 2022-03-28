import React from 'react'



export default function InventoryList ({inventory}){
  
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
