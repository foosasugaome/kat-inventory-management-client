import axios from 'axios'
import { useState, useEffect } from 'react'

export default function SearchApi () {
  const [search, setSearch] = useState('')
  const [apiResponse, setApiResponse] = useState(null)

  const endPoint = `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:"${search}"`

  const [result, setResult] = useState([])
  const [brandName, setBrandName] = useState([]) // brand_name
  const [genericName, setGenericName] = useState([]) // generic_name
  const [manufacturerName, setManufacturerName] = useState([]) // manufacturer_name
  const [productType, setProductType] = useState([]) // product_type
  const [route, setRoute] = useState([]) // route
  const [substanceName, setSubstanceName] = useState([]) // substance_name

  function fetchAPI (endpoint) {
    try {
      axios
        .get(endPoint)
        .then(response => {
          setResult(response.data.results[0].patient.drug[0].openfda)
          setBrandName(
            response.data.results[0].patient.drug[0].openfda.brand_name
          )
          setGenericName(
            response.data.results[0].patient.drug[0].openfda.generic_name
          )
          setManufacturerName(
            response.data.results[0].patient.drug[0].openfda.manufacturer_name
          )
          setProductType(
            response.data.results[0].patient.drug[0].openfda.product_type
          )
          setRoute(response.data.results[0].patient.drug[0].openfda.route)
          setSubstanceName(
            response.data.results[0].patient.drug[0].openfda.substance_name
          )
          setApiResponse(response.status)
        })
        .catch(error => {
          setApiResponse(error.response.status)
        })
    } catch (error) {
      setApiResponse(error)
      console.log(error)
    }
  }

  const handleSearch = e => {
    e.preventDefault()
    fetchAPI(endPoint)
  }

  const listBrandName = brandName.map((brand, index) => {
    return (
      <>
        <option value={brand}>{brand}</option>
      </>
    )
  })
  const listGenericName = genericName.map((generic, index) => {
    return (
      <>
        <option value={generic}>{generic}</option>
      </>
    )
  })
  const listManufacturerName = manufacturerName.map((manufacturer, index) => {
    return (
      <>
        <option value={manufacturer}>{manufacturer}</option>
      </>
    )
  })
  const listProductType = productType.map((producttype, index) => {
    return (
      <>
        <option value={producttype}>{producttype}</option>
      </>
    )
  })
  const listRoute = route.map((route, index) => {
    return (
      <>
        <option value={route}>{route}</option>
      </>
    )
  })
  const listSubstanceName = substanceName.map((substance, index) => {
    return (
      <>
        <option value={substance}>{substance}</option>
      </>
    )
  })

  return (
    <>
      <div className='flex-container'>
        <h3>Search FDA Database </h3>
      </div>
      <div className='flex-container'>
        <form onSubmit={handleSearch}>
          <label htmlFor='search'></label>
          <input
            type='text'
            id='search'
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='search'
          />
          <button type='submit'> Search </button>
        </form>
      </div>
      {search !== '' ? (
        <div className='form-container'>
          <label htmlFor='brandName'>Brand Name </label>
          <select id='brandName'>{listBrandName}</select>
          <label htmlFor='genericName'>Generic Name </label>
          <select id='genericName'>{listGenericName}</select>
          <label htmlFor='manufacturerName'>Manufacturer Name </label>
          <select id='manufacturerName'>{listManufacturerName}</select>
          <label htmlFor='productType'>Product Type </label>
          <select id='productType'>{listProductType}</select>
          <label htmlFor='route'>Route</label>
          <select id='route'>{listRoute}</select>
          <label htmlFor='substanceName'>Substance Name </label>
          <select id='substanceName'>{listSubstanceName}</select>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
