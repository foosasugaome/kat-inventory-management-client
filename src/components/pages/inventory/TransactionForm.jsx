export default function TransactionForm({ showTransForm, setShowTransForm, inventoryId }) {
    const handleShowForm = () => {        
        setShowTransForm(!showTransForm)        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setShowTransForm(!showTransForm)        
    }
    return(
        <>
        <div className="box stack-top">                 
            <div className="flex-container">            
            <form onSubmit={handleSubmit}>                
            <div className="form-container">
            <h3>Create Transaction ({inventoryId})</h3>                
                <label htmlFor='transType'>Transaction Type </label>
                <select className="form-fields">
                    <option>Add</option>
                    <option>Remove</option>
                </select>
                <label htmlFor='transCount'>Unit Count</label>
                <input type='number' id='transCount'  className="form-fields" required/>
                <label htmlFor="transNotes">Note </label>
                <textarea id='transNotes'  className="form-fields" required/>
                <label htmlFor='transOwner'>Created by</label>
                <input type='text' id='transOwner'  className="form-fields" required/>                
                <p><button type='submit'>Save </button> <button onClick={()=> handleShowForm()}> Cancel</button></p>
            </div>
            </form>
            </div>
        </div>

        </>
    )
}

