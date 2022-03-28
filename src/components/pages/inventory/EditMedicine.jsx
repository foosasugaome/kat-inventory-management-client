import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Search from "../../Search"
import DrugList from "./DrugList"


export default function EditMedicine ({medicineToEdit, setMedicineToEdit, inventoryList, setSelectedComponent, selectedComponent}) {
    
    const [fetchedMedicine, setFetchedMedicine] = useState()
    

    const [form, setForm] = useState({
        genericName: "",
        brandName: "",
        manufacturerName: "",
        productType: "",
        route: "",
        usedFor: "",
        unitCount: 0
    })


    const submitForm = (e) => {
        e.preventDefault()
        console.log(form)
        // axios.put(`url here`, form)
    }

    const filterMed = (name) => {
        let filteredMedicine = inventoryList.filter((drug) => {
            return drug.genericName.toLowerCase().trim() === name.toLowerCase().trim()
        })
        console.log(filteredMedicine)
        setFetchedMedicine(filteredMedicine)
        console.log(fetchedMedicine)
    }
    return(
        <>
            <h1>Edit Medicine</h1>
            
            <Search fetchedMedicine={fetchedMedicine} setFetchedMedicine={setFetchedMedicine} filterMed={filterMed} />


            <DrugList inventoryList={inventoryList} fetchedMedicine={fetchedMedicine} setMedicineToEdit={setMedicineToEdit} setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} />

            <form onSubmit={submitForm}>
                <label htmlFor="genericName">Generic Name:</label>
                <input type="text" name="genericName" id="genericName" value={medicineToEdit.genericName} onChange={(e) => {setForm({...form, genericName: e.target.value})}}/>

                <label htmlFor="brandName">Brand Name: </label>
                <input type="text" name="brandName" id="brandName" value={medicineToEdit.brandName} onChange={(e) => {setForm({...form, brandName: e.target.value})}}/>

                <label htmlFor="manufacturerName">Manufacturer: </label>
                <input type="text" name="manufacturerName" id="manufacturerName" value={medicineToEdit.manufacturerName} onChange={(e) => {setForm({...form, manufacturerName: e.target.value})}}/>

                <label htmlFor="productType">Product Type: </label>
                <input type="text" name="productType" id="productType" value={medicineToEdit.productType} onChange={(e) => {setForm({...form, productType: e.target.value})}}/>

                <label htmlFor="route">Route: </label>
                <input type="text" name="route" id="route" value={medicineToEdit.route} onChange={(e) => {setForm({...form, route: e.target.value})}}/>

                <label htmlFor="usedFor">Used For: </label>
                <input type="text" name="usedFor" id="usedFor" value={medicineToEdit.usedFor} onChange={(e) => {setForm({...form, usedFor: e.target.value})}}/>

                <label htmlFor="unitCount">Unit Count: </label>
                <input type="number" name="unitCount" id="unitCount" value={medicineToEdit.unitCount} onChange={(e) => {setForm({...form, unitCount: e.target.value})}}/>
                
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}