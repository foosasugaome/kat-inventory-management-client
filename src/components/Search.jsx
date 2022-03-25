import { useState, useEffect } from "react"
import axios from "axios"

export default function Search ({search, setSearch}) {

   

  
    return(
        <div className="main">
            <label htmlFor="search">Search: </label>
            <input type="text" name="" id="search" onChange={(e) => {setSearch(e.target.value)}}/>
            <input type="submit" value="Search" />
        </div>
    )
}