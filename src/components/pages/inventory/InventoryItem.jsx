

export default function InventoryItem () {
    return(
        <>
        <h1>Inventory Item</h1>

        <div className='flex-container'>
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
                <td>Generic name</td>
                <td>Brand name</td>
                <td>Manufacturer</td>
                <td>Route</td>
                <td>Product Type</td>                    
                <td>Used For</td>
                <td>Substance Name</td>
                </tbody>
            </table>                                
        </div>    
        </>
    )
}