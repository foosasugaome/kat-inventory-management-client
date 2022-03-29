import { useState } from "react"
import axios from "axios"

export default function Transaction() {
    const [form, setForm] = useState({
        genericName : ''
    })
    const [results, setResults] = useState([])
    console.log(form)

    const handleSearchDB = (e) => {
        e.preventDefault()
        try {            
            axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory/search`, form)
            .then(response => {                
                setResults(response.data)
                console.log(response.data)
            })
        } catch (error) {
            
        }
    }
    const  listResults =  results.map((drug, index) => {
        return (
            <>
            <p key={`key-${index}`}>{drug.genericName}</p>
            </>
        )
    })

    return(
        <>
        <div className='flex-container'>
        <form onSubmit={handleSearchDB}>
            <label htmlFor='genericName'></label>
            <input type='text' value={form.genericName} onChange={(e) => setForm({...form, genericName: e.target.value})} />
            <button type='submit'> Search </button>
        </form>
        </div>
        {listResults}
        </>
    )
}