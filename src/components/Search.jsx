import { useState } from 'react'
import axios from 'axios'

export default function Search ({
  setInventoryList,
  setShowList,
  showList,
  setShowForm,
  showForm
}) {
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
          setShowForm(false)
          setMessage(`Search results for : ${form.genericName}`)
        })
        .catch(error =>
          setMessage(`An error occured. Please contact your administrator.`)
        )
    } catch (error) {
      setMessage(`An error occured. Please contact your administrator.`)
      console.log(error)
    }
  }

  return (
    <>
      <div className='flex-container'>
        <form onSubmit={handleSearchDB}>
          {message}
          <label htmlFor='search'></label>
          <input
            type='text'
            name=''
            id='search'
            onChange={e => {
              setForm({ ...form, genericName: e.target.value })
            }}
            placeholder='Search by generic name'
            required
          />
          <p> 
            <button type='submit' value='Search'>
              Submit
            </button>
          </p>
        </form>
      </div>
    </>
  )
}
