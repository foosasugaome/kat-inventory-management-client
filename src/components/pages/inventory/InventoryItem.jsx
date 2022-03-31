export default function InventoryItem ({ fetchedMedicine }) {
  return (
    <>
      <div className='form-container'>
        <h3>Showing more details of: {fetchedMedicine.genericName}</h3>

        <div className='card'>
          <p>Generic name : {fetchedMedicine.genericName}</p>
          <p>Manufacturer : {fetchedMedicine.manufacturerName}</p>
          <p>Product Type : {fetchedMedicine.productType}</p>
          <p>
            {' '}
            Substance Name :
            {!fetchedMedicine.substanceName
              ? 'Not Available'
              : fetchedMedicine.substanceName}
          </p>

          <p>Brand name : {fetchedMedicine.brandName}</p>
          <p>Route : {fetchedMedicine.route}</p>
          <p>
            Used For :
            {!fetchedMedicine.usedFor
              ? 'Not Available'
              : fetchedMedicine.usedFor}
          </p>
        </div>
</div>
        
    </>
  )
}
