import axios from "axios"
import { useState, useEffect } from "react"

export default function SearchApi() {
    
    
    const endPoint = `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.generic_name.exact:"IBUPROFEN"`
    
    const [result, setResult] = useState([])
    const [brandName, setBrandName] = useState([]) // brand_name
    const [genericName, setGenericName] = useState([]) // generic_name
    const [manufacturerName, setManufacturerName] = useState([]) // manufacturer_name
    const [productType, setProductType] = useState([]) // product_type
    const [route, setRoute] = useState([]) // route
    const [substanceName, setSubstanceName] = useState([]) // substance_name
    
    

    function fetchAPI(endpoint) {
        axios.get(endPoint)
        .then(response => {
            setResult(response.data.results[0].patient.drug[0].openfda)
            setBrandName(response.data.results[0].patient.drug[0].openfda.brand_name)
            setGenericName(response.data.results[0].patient.drug[0].openfda.generic_name)
            setManufacturerName(response.data.results[0].patient.drug[0].openfda.manufacturer_name)
            setProductType(response.data.results[0].patient.drug[0].openfda.product_type)
            setRoute(response.data.results[0].patient.drug[0].openfda.route)
            setSubstanceName(response.data.results[0].patient.drug[0].openfda.substance_name)        
        })        
    }
    useEffect(()=> {
       fetchAPI(endPoint) 
    },[])
    
    console.log(brandName)
    // const listSearchResults = result.map((drug, idx) => {
    //      return (
    //          <p>{drug.generic_name[0]}</p>
    //     )
    // })

    return(
        <>
        <div className="flex-container">
        <h3>SEARCH API</h3>
        </div>
        {JSON.stringify(brandName)}
        
        </>
    )
}