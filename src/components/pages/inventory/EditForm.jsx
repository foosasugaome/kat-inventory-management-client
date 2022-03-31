
export default function EditForm ({form, setForm, submitForm}) {
    return(
        <div className="flex-container">    
           <div className="form-container">
            <form onSubmit={submitForm}>
                <label htmlFor="genericName">Generic Name:</label>
                <input type="text" name="genericName" id="genericName" value={form.genericName} onChange={(e) => {setForm({...form, genericName: e.target.value})}}/>

                <label htmlFor="brandName">Brand Name: </label>
                <input type="text" name="brandName" id="brandName" value={form.brandName} onChange={(e) => {setForm({...form, brandName: e.target.value})}}/>

                <label htmlFor="manufacturerName">Manufacturer: </label>
                <input type="text" name="manufacturerName" id="manufacturerName" value={form.manufacturerName} onChange={(e) => {setForm({...form, manufacturerName: e.target.value})}}/>

                <label htmlFor="productType">Product Type: </label>
                <input type="text" name="productType" id="productType" value={form.productType} onChange={(e) => {setForm({...form, productType: e.target.value})}}/>

                <label htmlFor="route">Route: </label>
                <input type="text" name="route" id="route" value={form.route} onChange={(e) => {setForm({...form, route: e.target.value})}}/>

                <label htmlFor="usedFor">Used For: </label>
                <input type="text" name="usedFor" id="usedFor" value={form.usedFor} onChange={(e) => {setForm({...form, usedFor: e.target.value})}}/>

                <label htmlFor="unitCount">Unit Count: </label>
                <input type="number" name="unitCount" id="unitCount" value={form.unitCount} onChange={(e) => {setForm({...form, unitCount: e.target.value})}}/>
                
                <input type="submit" value="Submit" />
            </form>
            </div></div>
    )
}