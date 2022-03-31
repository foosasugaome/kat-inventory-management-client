import axios from "axios"
import { useEffect,useState } from "react"

export default function SalesListDetail({  setMessage, showTransForm, setShowTransForm, inventoryId, currentUser }) {
    const invId = inventoryId.slice(0,inventoryId.indexOf(' '))
    const invDesc = inventoryId.slice(inventoryId.indexOf(' '))
    const [results, setResults] = useState([])

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory/${invId}/transaction`)        
        .then(response => setResults(response.data))
        .catch(error => console.log(error))
    },[invId])

    const listTransactions = results.map((t,index) => {
        /// dipslay only transaction type "P"        
            return(
                <>
                {t.transType === 'S' ? 
            <tr>
            <td>{t.createdAt}</td>
            <td className="right-align">{t.transCount.toLocaleString("en-us")}</td>
            <td>{t.transNotes}</td>
            <td>{t.transOwner}</td>                          
          </tr>
                :
                    null
                }
                
                </>
            )
    })
    return(
<>
<div className="flex-container">    
</div>
<div className="flex-container">
    <h3>Sales : {invDesc}</h3>
</div>
<div className="flex-container">
<table>
            <thead>
            <tr>
              <th>Date</th>
              <th>Unit Count</th>
              <th>Notes</th>
              <th>Created by</th>                          
            </tr>
            </thead>
            <tbody>
            {listTransactions}
            </tbody>
          </table>
    
</div>
</>
    )
}