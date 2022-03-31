import axios from 'axios'
import { useState } from 'react'
import SearchApi from '../../SearchApi'

export default function AddMedicine ({ inventoryList, setInventoryList }) {
  const [form, setForm] = useState({
    genericName: '',
    brandName: '',
    manufacturerName: '',
    productType: '',
    route: '',
    usedFor: '',
    unitCount: 0,
    transactions: [
      {
        transType: 'add',
        transCount: 0,
        transNotes: 'New record',
        transOwner: 'System',
        transUpdatedBy: 'System'
      }
    ]
  })
  const [result, setResult] = useState([])
  
  const submitForm = e => {
    e.preventDefault()
    console.log(form)
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory`, form)
      .then(response => {
        console.log(inventoryList, response.data)
        setResult(`Saved to inventory.`)
        setInventoryList([...inventoryList, form])
      })
  }
  return (
    <>
      <div className='flex-container'>
        <h3>Add Medicine</h3>
      </div>
      <div className='flex-container'>
        {result} 
      </div>
      <div className='flex-container-nowrap'>
        <div className='form-container'>
          <form onSubmit={submitForm}>
            <label htmlFor='brandName'>Brand Name: </label>
            <input
              type='text'
              name='brandName'
              id='brandName'
              value={form.brandName}
              onChange={e => {
                setForm({ ...form, brandName: e.target.value })
              }}
            />
            <label htmlFor='genericName'>Generic Name:</label>
            <input
              type='text'
              name='genericName'
              id='genericName'
              value={form.genericName}
              onChange={e => {
                setForm({ ...form, genericName: e.target.value })
              }}
            />

            <label htmlFor='manufacturerName'>Manufacturer: </label>
            <input
              type='text'
              name='manufacturerName'
              id='manufacturerName'
              value={form.manufacturerName}
              onChange={e => {
                setForm({ ...form, manufacturerName: e.target.value })
              }}
            />

            <label htmlFor='productType'>Product Type: </label>
            <input
              type='text'
              name='productType'
              id='productType'
              value={form.productType}
              onChange={e => {
                setForm({ ...form, productType: e.target.value })
              }}
            />

            <label htmlFor='route'>Route: </label>
            <input
              type='text'
              name='route'
              id='route'
              value={form.route}
              onChange={e => {
                setForm({ ...form, route: e.target.value })
              }}
            />

            <label htmlFor='usedFor'>Used For: </label>
            <input
              type='text'
              name='usedFor'
              id='usedFor'
              onChange={e => {
                setForm({ ...form, usedFor: e.target.value })
              }}
            />
            <p>
              <button type='submit' >Save</button>
            </p>
          </form>
        </div>          
        <div className='form-container'>
          <SearchApi form={form} setForm={setForm} result={result} setResult={setResult} />
        </div>    
      </div>
    </>
  )
}
