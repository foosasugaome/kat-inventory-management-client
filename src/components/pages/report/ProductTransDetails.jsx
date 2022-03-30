export default function ProductTransDetails ({ selectedProduct }) {
  const transactions = selectedProduct.transactions.map((t, index) => {
    return (
      <>
        <p>{t.transCount}</p>
      </>
    )
  })

  console.log(selectedProduct.transactions)
  return (
    <>
      <div className='flex-container'>
        Brand name : {selectedProduct.brandName}
              Date : {selectedProduct.createdAt}
              Generic name :  {selectedProduct.genericName}
              Last updated : {selectedProduct.upudatedAt} Manufacturer Name : {selectedProduct.manufacturerName}
              
      </div>
      {selectedProduct.genericName}
      {transactions}
    </>
  )
}
