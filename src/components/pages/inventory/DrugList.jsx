
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function DrugList ({inventoryList, setForm, setShowForm}) {
    // const [inventoryList, setInventoryList] = useState([])

    // const [inventory, setInventory] = useState([])

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory`)
    //         .then(response => {
    //             setInventoryList(response.data)
    //             // console.log(response.data)
    //         })
    // },[])
    
    // const myApiKey = process.env.REACT_APP_API_KEY
    // const apiUrl = `https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames.json?drug_name=${search}`
    // console.log(inventoryList)

    const editBtnHandler = (med) => {
        // setMedicineToEdit(med)
        setForm(med)
        setShowForm(true)
        
    }
    // console.log(selectedComponent)
    const allDrugs = inventoryList.map((item, idx) => {
        return (
            <div className="main" key={idx}>
                <h3>{item.genericName}</h3>
                <p>{item.brandName}</p>
                <p>{item.productType}</p>
                <p>{item.manufacturerName}</p>
                <p>{item.route}</p>
                <p>{item.usedFor}</p>
                {/* Put an onclick function here on the edit button that sets the medtoedit state to the clicked medicine */}
                <button onClick={() => {editBtnHandler(item)}}>Edit</button>
            </div>
        )
    })
    return(
        <>
            <h1>Druglist</h1>
            {allDrugs}
            {/* {
                !fetchedMedicine ? null : fetchedMedicine
            } */}

        </>
    )
}