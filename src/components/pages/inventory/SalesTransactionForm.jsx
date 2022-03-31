import { useState } from "react"
import axios from "axios"
export default function SalesTransactionForm({ setMessage, showTransForm, setShowTransForm, inventoryId, currentUser }) {
    const invId = inventoryId.slice(0,inventoryId.indexOf(' '))
    const invDesc = inventoryId.slice(inventoryId.indexOf(' '))
    
    const [form, setForm] = useState({
        transType: 'S',
        transCount: null,
        transPPU: null,
        transNotes : '',
        transOwner: currentUser.username
    })
    
    const handleShowForm = () => {        
        setShowTransForm(!showTransForm)        
    }
    const handleSubmit = (e) => {
        e.preventDefault()    
        try {
            axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory/${invId}/transaction`,form)    
            .then(response => {
                setMessage('Record updated.')            
                setForm({
                    transType: '',
                    transCount: 0,
                    transPPU: null,
                    transNotes : '',
                    transOwner: ''
                })
                
            })
            .catch(error => {
                setMessage('An error occured. Please contact your administrator.')
            })
        } catch (error) {   
            setMessage('An error occured. Please contact your administrator.')
        }        
        setShowTransForm(!showTransForm)                
    }

    return(
        <>
        
            <div className="flex-container">            
            
            <div className="form-container">
            <h3>{invDesc}</h3>                            
            <form onSubmit={handleSubmit}>                    
                <label htmlFor='transCount'>Unit Count</label>
                <input type='number' id='transCount' value={form.transCount} onChange={(e)=>setForm({...form, transCount:e.target.value})} required/>
                <label htmlFor='transPPU'>Price per Unit</label>
                <input type='number' id='transPPU' value={form.transPPU} onChange={(e)=>setForm({...form, transPPU:e.target.value})} required/>
                <label htmlFor="transNotes">Note </label>
                <textarea id='transNotes' value={form.transNotes} onChange={(e)=>setForm({...form, transNotes:e.target.value})} />
                <label htmlFor='transOwner'>Created by</label>
                <input type='text' id='transOwner' value={form.transOwner} disabled/>                
                <p><button type='submit'>Save </button> <button onClick={()=> handleShowForm()}> Cancel</button></p>
                </form>
            </div>
            
            </div>
        

        </>
    )
}

