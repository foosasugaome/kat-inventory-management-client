import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductTransDetails from './ProductTransDetails'

export default function Byproduct () {
  const [form, setForm] = useState({
    genericName: ''
  })
  const [results, setResults] = useState([])
  const [prod, setProd] = useState([])
  const [showForm, setShowForm] = useState(false)
  useEffect(()=>{
    try {
        if(form.genericName !=='') {
            axios
            .post(
              `${process.env.REACT_APP_SERVER_URL}/api-v1/inventory/search`,form
            )
            .then(response => {
              setResults(response.data)            
            })
          .catch(err => console.log(err))
        } else{
            setResults([])
        }
      } catch (error) {
        console.log(error)
      }
  },[form])

  const showResults = results.map((res, index) => {
      return (
          <>
          <button className='button-link' value={res} onClick={() => handleSearch(res)}>{res.genericName}</button>
          </>
      )
  })

  const handleSearch = (resp) => {
    setProd(resp)
    setShowForm(true)
  }

  return (
    <>
      <div className='tab-container'>
        <div className='flex-container'>
        
            <input
              type='text'
              value={form.genericName}
              onChange={e => setForm({ ...form, genericName: e.target.value })}
              placeholder='Search'
              required
            />            
        </div>
        <div className='form-container'>            
            {showResults}            
        </div>        
      </div>

      <div className='tab-container'>
      {
                showForm ?                
                <ProductTransDetails selectedProduct={prod} />               
                : 
                null 
            }            
      </div>
    </>
  )
}
