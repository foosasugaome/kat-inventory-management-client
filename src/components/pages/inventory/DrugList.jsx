export default function DrugList ({inventoryList, setShowList, showList, setForm, setShowForm}) {


    const editBtnHandler = (med) => {

        setForm(med)
        setShowForm(true)
        setShowList(!showList)
        
    }
    const allDrugs = inventoryList.map((item, idx) => {
        return (
            <tr className="main" key={idx}>
                <td>{item.genericName}</td>
                <td>{item.brandName}</td>
                <td>{item.manufacturerName}</td>
                <td>{item.route}</td>
                <td>{item.productType}</td>          
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