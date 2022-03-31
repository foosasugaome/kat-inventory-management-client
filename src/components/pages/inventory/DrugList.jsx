import axios from "axios"

export default function DrugList ({
    inventoryList,
    setInventoryList, 
    setShowList, 
    showList, 
    setForm, 
    setShowForm, 
    refresher, 
    setRefresher,
    setFetchedMedicine

}) {


    const editBtnHandler = (med) => {
        setForm(med)
        setShowForm(true)
        setShowList(!showList)
    }
    

    const deleteBtnHandler = (med) => {
        // console.log(med)
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory/${med}`)
            .then(response => {
                console.log(response.data)
                // setShowList(!showList)
                setRefresher(!refresher)
                setInventoryList(inventoryList)
            })
    }

    const viewBtnHandler = (med) => {
        console.log(med)
        setFetchedMedicine(med)
        
    }
    const allDrugs = inventoryList.map((item, idx) => {
        return (
            <tr className="main" key={idx}>
                <td>{item.genericName}</td>
                <td>{item.brandName}</td>
                <td>{item.manufacturerName}</td>
                <td>{item.route}</td>
                <td>{item.productType}</td>          
                <td>
                    <button onClick={() => {editBtnHandler(item)}}>Edit</button> 
                </td>
                <td>
                    <button onClick={() => {deleteBtnHandler(item._id)}}>Delete</button> 
                </td>
                <td>
                    <button onClick={() => {viewBtnHandler(item)}}>View</button>
                </td>
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
                    <th></th>
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