import { useState } from "react"
import axios from "axios"
import Inventory from "./pages/Inventory"

export default function Search ({ inventoryList, setInventoryList, setShowList, showList}) {
    const [errorMsg, setErrorMsg] = useState("")
    const [form, setForm] = useState({
        genericName: ''
      })
      const [message, setMessage] = useState('')
    const handleSearchDB = e => {
        e.preventDefault()
        try {
          axios
            .post(
              `${process.env.REACT_APP_SERVER_URL}/api-v1/inventory/search`,
              form
            )
            .then(response => {
              setInventoryList(response.data)
              setShowList(true)
              setMessage(`Search results for : ${form.genericName}`)
            })
            .catch(error => setMessage(`An error occured. Please contact your administrator.`))
           
        } catch (error) {
          setMessage(`An error occured. Please contact your administrator.`)
          console.log(error)
        }
        
      }
      console.log(inventoryList)
    
    return(
        <>
        <form onSubmit={handleSearchDB}>
            <label htmlFor="search">Search: </label>
            <input 
                type="text" 
                name="" id="search" 
                onChange={(e) => {setForm({...form, genericName: e.target.value})}}
                placeholder="Search by generic name"
                />
            <input type="submit" value="Search"/>
        </form>
        </>
    )
}