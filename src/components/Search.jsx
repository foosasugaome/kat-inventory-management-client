import { useState } from "react"

export default function Search ({filterMed, fetchedMedicine, setFetchedMedicine}) {
    const [search, setSearch] = useState("")

    console.log(fetchedMedicine)
    return(
        <>
      
            <label htmlFor="search">Search: </label>
            <input type="text" name="" id="search" onChange={(e) => {setSearch(e.target.value)}}/>
            <input type="submit" value="Search" onClick={() => {filterMed(search)}}/>
        </>
    )
}