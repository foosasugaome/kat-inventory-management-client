export default function ProductTransDetails ({ selectedProduct }) {
    // if(selectedProduct.transactions.length === 0) {        
    //     console.log('0')
    // }
//     const transactions = selectedProduct.transactions.map((t, index) => {
//     return (
//       <>
//         <p>{t.transCount}</p>
//       </>
//     )
//   })

  console.log(selectedProduct.transactions)
  return (
    <>
      {selectedProduct.genericName}
      {/* {transactions} */}
    </>
  )
}
