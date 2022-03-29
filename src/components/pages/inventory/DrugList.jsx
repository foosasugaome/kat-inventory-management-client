
export default function DrugList ({inventoryList, setInventoryList, setForm, setShowForm, fetchedMedicine}) {

    const editBtnHandler = (med) => {
        // setMedicineToEdit(med)
        setForm(med)
        setShowForm(true)
        
    }
    // console.log(selectedComponent)
    const allDrugs = inventoryList.map((item, idx) => {
        return (
            <tr className="main" key={idx}>
                <td>{item.genericName}</td>
                <td>{item.brandName}</td>
                <td>{item.manufacturerName}</td>
                <td>{item.route}</td>
                <td>{item.productType}</td>
                {/* <td>{item.usedFor}</td> */}
                {/* Put an onclick function here on the edit button that sets the medtoedit state to the clicked medicine */}
                <td><button onClick={() => {editBtnHandler(item)}}>Edit</button> </td>
            </tr>
        )
    })

    return(
        <>
             <div className='flex-container'>
                
                <table>
                    <thead>
                    <tr>
                    <th>Generic name</th>
                    <th>Brand name</th>
                    <th>Manufacturer</th>
                    <th>Route</th>
                    <th>Product Type</th>
                    {/* <th>Use</th> */}
                    <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {allDrugs}
                    </tbody>
                </table>                
            </div>
        </>
    )
}