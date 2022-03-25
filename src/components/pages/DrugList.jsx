import Search from "../Search";
import axios from "axios"
import { useState, useEffect } from "react"

export default function DrugList () {
    const [inventoryList, setInventoryList] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [search, setSearch] = useState("paracetamol")
    const myApiKey = process.env.REACT_APP_API_KEY
    const apiUrl = `https://api.fda.gov/drug/event.json?api_key=${myApiKey}&search=${search}&limit=10`
    
    console.log(myApiKey)
  
   useEffect(() => {
     axios.get(apiUrl)
      .then(response => {
        const drugData = response.data.results.map((result, index) => {
          return result.patient
          
        })
        console.log(drugData.drug)
        // setSearchResults(response.data.results[0])
        // setInventoryList(drugData)
      })
      
      
   },[])

//    const allDrugs = searchResults.map((drug, index) => {
    //    return Object.values(drug)
//     return (
//        <li> {drug} </li>
//         )
//    })
//    const allDrugsToArray = Object.values(allDrugs)
// console.log(allDrugs)
    return(
        <div className="home">
            <h1>Druglist</h1>
            {/* {allDrugsDisplay} */}
            <Search search={search} setSearch={setSearch} />
        </div>
    )
}