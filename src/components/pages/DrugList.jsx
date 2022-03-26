import Search from "../Search";
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function DrugList () {
    const [inventoryList, setInventoryList] = useState([
        {
            drugName: "ibuprofen",
            brandName: "waahhh",
            nameType: "generic",
            manufacturerName: "Kaiser Permanente",
            productType: "tablet",
            route: "oral",
            usedFor: "hangovers",
            substanceName: "Ibuprofen",
            unitCount: 5,
        },
        {
            drugName: "glucophage",
            brandName: "waahhh",
            nameType: "generic",
            manufacturerName: "Kaiser Permanente",
            productType: "tablet",
            route: "oral",
            usedFor: "hangovers",
            substanceName: "Ibuprofen",
            unitCount: 5,
        },
        {
            drugName: "paracetamol",
            brandName: "waahhh",
            nameType: "generic",
            manufacturerName: "Kaiser Permanente",
            productType: "tablet",
            route: "oral",
            usedFor: "hangovers",
            substanceName: "Ibuprofen",
            unitCount: 5,
        },
        {
            drugName: "metformin",
            brandName: "waahhh",
            nameType: "generic",
            manufacturerName: "Kaiser Permanente",
            productType: "tablet",
            route: "oral",
            usedFor: "hangovers",
            substanceName: "Ibuprofen",
            unitCount: 5,
        },
        {
            drugName: "rosuvastatin",
            brandName: "crestor",
            nameType: "generic",
            manufacturerName: "Kaiser Permanente",
            productType: "tablet",
            route: "oral",
            usedFor: "hangovers",
            substanceName: "Ibuprofen",
            unitCount: 5,
        },
    ])
    const [searchResults, setSearchResults] = useState([])
    const [search, setSearch] = useState("paracetamol")
    // const myApiKey = process.env.REACT_APP_API_KEY
    // const apiUrl = `https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames.json?drug_name=${search}`

    const allDrugs = inventoryList.map((item, idx) => {
        return (
            <div className="App-header">
                <h5>{item.drugName}</h5>
                <p>{item.nameType}</p>
                <p>{item.brandName}</p>
                <p>{item.manufacturerName}</p>
                <p>{item.route}</p>
                <p>{item.usedFor}</p>
                <Link to="/medicine/:id">
                <button>Edit</button>
                </Link>
            </div>
        )
    })
    return(
        <div className="home">
            <h1>Druglist</h1>
            {allDrugs}
            <Search search={search} setSearch={setSearch} />
        </div>
    )
}