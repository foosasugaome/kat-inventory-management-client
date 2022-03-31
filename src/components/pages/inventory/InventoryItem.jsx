

export default function InventoryItem ({fetchedMedicine}) {
    return(
        <>

        <div className='flex-container'>
        <h3>Showing more details of: {fetchedMedicine.genericName}</h3>
            <table>
                <thead>
                <tr>
                <th>Generic name</th>
                <th>Brand name</th>
                <th>Manufacturer</th>
                <th>Route</th>
                <th>Product Type</th>                    
                <th>Used For</th>
                <th>Substance Name</th>
                </tr>
                </thead>
                <tbody>
                <td>{fetchedMedicine.genericName}</td>
                <td>{fetchedMedicine.brandName}</td>
                <td>{fetchedMedicine.manufacturerName}</td>
                <td>{fetchedMedicine.route}</td>
                <td>{fetchedMedicine.productType}</td>                    
                <td>
                    {
                    !fetchedMedicine.usedFor ? "Not Available" : fetchedMedicine.usedFor
                    }
                </td>
                <td>
                    {
                    !fetchedMedicine.substanceName ? "Not Available" : fetchedMedicine.substanceName
                    }
                </td>
                </tbody>
            </table>                                
        </div>    
        </>
    )
}