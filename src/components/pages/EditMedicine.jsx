import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"


export default function EditMedicine () {
    

    //This is just placeholder medicine to edit. This is going to be replaced by the medicine specific to the id params.
    const [medicineToEdit, setMedicineToEdit] = useState(
        {
            genericName: "ibuprofen",
            brandName: "waahhh",
            nameType: "generic",
            manufacturerName: "Kaiser Permanente",
            productType: "tablet",
            route: "oral",
            usedFor: "hangovers",
            substanceName: "Ibuprofen",
            unitCount: 5,
        },
    )

    // const { id } = useParams()
    
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
    return(
        <div className="main">
            <h1>Add New Medicine</h1>

            <form onSubmit={submitForm}>
                <label htmlFor="genericName">Generic Name:</label>
                <input type="text" name="genericName" id="genericName" value={medicineToEdit.genericName} onChange={(e) => {setForm({...form, genericName: e.target.value})}}/>

                <label htmlFor="brandName">Brand Name: </label>
                <input type="text" name="brandName" id="brandName" value={medicineToEdit.genericName} onChange={(e) => {setForm({...form, brandName: e.target.value})}}/>

                <label htmlFor="manufacturerName">Manufacturer: </label>
                <input type="text" name="manufacturerName" id="manufacturerName" value={medicineToEdit.genericName} onChange={(e) => {setForm({...form, manufacturerName: e.target.value})}}/>

                <label htmlFor="productType">Product Type: </label>
                <input type="text" name="productType" id="productType" value={medicineToEdit.genericName} onChange={(e) => {setForm({...form, productType: e.target.value})}}/>

                <label htmlFor="route">Route: </label>
                <input type="text" name="route" id="route" value={medicineToEdit.genericName} onChange={(e) => {setForm({...form, route: e.target.value})}}/>

                <label htmlFor="usedFor">Used For: </label>
                <input type="text" name="usedFor" id="usedFor" value={medicineToEdit.genericName} onChange={(e) => {setForm({...form, usedFor: e.target.value})}}/>

                <label htmlFor="unitCount">Unit Count: </label>
                <input type="number" name="unitCount" id="unitCount" value={medicineToEdit.genericName} onChange={(e) => {setForm({...form, unitCount: e.target.value})}}/>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}