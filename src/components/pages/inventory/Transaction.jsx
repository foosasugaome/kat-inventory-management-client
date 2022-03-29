import { useState } from 'react'
import axios from 'axios'
import TransactionForm from './TransactionForm'

export default function Transaction ({ currentUser }) {
  const [form, setForm] = useState({
    genericName: ''
  })
  const [results, setResults] = useState([])
  const [message, setMessage] = useState('')
  const [inventoryId, setInventoryId] = useState('')
  const [showTransForm, setShowTransForm] = useState(false)

  const handleSearchDB = e => {
    e.preventDefault()
    try {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/api-v1/inventory/search`,
          form
        )
        .then(response => {
          setResults(response.data)           
          setMessage(`Search results for : ${form.genericName}`)
      
        })
        .catch(error => setMessage(`An error occured. Please contact your administrator.`))
       
    } catch (error) {
      setMessage(`An error occured. Please contact your administrator.`)
      console.log(error)
    }
  }

  
  const handleSelect = (e) => {    
    setInventoryId(e.target.value)
    setShowTransForm(true)
    // setSelectedComponent('2')    
  }
  const listResults = results.map((drug, index) => {
    return (
      <>
        <tr>
          <td>{drug.genericName}</td>
          <td>{drug.brandName}</td>
          <td>{drug.manufacturerName}</td>
          <td>{drug.route}</td>
          <td className='centered-element'>
            <button key={`key-${index}`} value={`${drug._id} ${drug.genericName} ${drug.brandName}`} onClick={handleSelect}>Select</button>
          </td>
        </tr>
      </>
    )
  })

  return (
    <>
      <div className='flex-container'>
        <form onSubmit={handleSearchDB}>
          <label htmlFor='genericName'></label>
          <input
            type='text'
            value={form.genericName}
            onChange={e => setForm({ ...form, genericName: e.target.value })}
            required
          />
          <button type='submit'> Search </button>
        </form>
      </div>
      {
          showTransForm ? 
          <TransactionForm setMessage={setMessage} showTransForm={showTransForm} setShowTransForm={setShowTransForm} inventoryId={inventoryId} currentUser={currentUser} />
          :
          null
      }
      {results.length > 0 ? (
        <div className='flex-container'>
          {message}

          <table>
              <thead>
            <tr>
              <th>Generic name</th>
              <th>Brand name</th>
              <th>Manufacturer</th>
              <th>Route</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {listResults}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='flex-container'>{message}</div>
      )}
     
    </>
  )
}
