
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Search from "../../Search"


export default function DrugList () {
    const [inventoryList, setInventoryList] = useState([
        // {
        //     drugName: "ibuprofen",
        //     brandName: "waahhh",
        //     nameType: "generic",
        //     manufacturerName: "Kaiser Permanente",
        //     productType: "tablet",
        //     route: "oral",
        //     usedFor: "hangovers",
        //     substanceName: "Ibuprofen",
        //     unitCount: 5,
        // },
        // {
        //     drugName: "glucophage",
        //     brandName: "waahhh",
        //     nameType: "generic",
        //     manufacturerName: "Kaiser Permanente",
        //     productType: "tablet",
        //     route: "oral",
        //     usedFor: "hangovers",
        //     substanceName: "Ibuprofen",
        //     unitCount: 5,
        // },
        // {
        //     drugName: "paracetamol",
        //     brandName: "waahhh",
        //     nameType: "generic",
        //     manufacturerName: "Kaiser Permanente",
        //     productType: "tablet",
        //     route: "oral",
        //     usedFor: "hangovers",
        //     substanceName: "Ibuprofen",
        //     unitCount: 5,
        // },
        // {
        //     drugName: "metformin",
        //     brandName: "waahhh",
        //     nameType: "generic",
        //     manufacturerName: "Kaiser Permanente",
        //     productType: "tablet",
        //     route: "oral",
        //     usedFor: "hangovers",
        //     substanceName: "Ibuprofen",
        //     unitCount: 5,
        // },
        // {
        //     drugName: "rosuvastatin",
        //     brandName: "crestor",
        //     nameType: "generic",
        //     manufacturerName: "Kaiser Permanente",
        //     productType: "tablet",
        //     route: "oral",
        //     usedFor: "hangovers",
        //     substanceName: "Ibuprofen",
        //     unitCount: 5,
        // },
    ])

    // const [inventory, setInventory] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory`)
            .then(response => {
                setInventoryList(response.data)
                // console.log(response.data)
            })
    },[])
    const [searchResults, setSearchResults] = useState([])
    const [search, setSearch] = useState("paracetamol")
    // const myApiKey = process.env.REACT_APP_API_KEY
    // const apiUrl = `https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames.json?drug_name=${search}`
    console.log(inventoryList)

    const allDrugs = inventoryList.map((item, idx) => {
        return (
            <div className="main">
                <h5>{item.drugName}</h5>
                <p>{item.nameType}</p>
                <p>{item.brandName}</p>
                <p>{item.manufacturerName}</p>
                <p>{item.route}</p>
                <p>{item.usedFor}</p>
                <Link to={`/medicine/${item._id}/edit`}>
                <button>Edit</button>
                </Link>
            </div>
        )
    })
    return(
        <>
            <h1>Druglist</h1>
            {allDrugs}
            <Search search={search} setSearch={setSearch} />
        </>
    )
}