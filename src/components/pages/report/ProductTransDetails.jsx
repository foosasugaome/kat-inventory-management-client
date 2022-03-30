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
      {selectedProduct.genericName}
      {transactions}
    </>
  )
}
