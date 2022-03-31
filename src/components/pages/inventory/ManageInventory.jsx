import axios from "axios"
import { useState } from "react"
import Search from "../../Search"
import DrugList from "./DrugList"
import EditForm from "./EditForm"
import InventoryItem from "./InventoryItem"


export default function ManageInventory({inventoryList, setInventoryList, refresher, setRefresher, showForm, setShowForm}) {
    const [form, setForm] = useState({
        genericName: "",
        brandName: "",
        manufacturerName: "",
        productType: "",
        route: "",
        usedFor: "",
        unitCount: 0
    })

    const [showList, setShowList] = useState(false)


    const submitForm = (e) => {
        e.preventDefault()
        console.log(form)
        axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/inventory/${form._id}`, form)
            .then(response => {
                setInventoryList([...inventoryList, form])
                setShowForm(!showForm)
                setRefresher(!refresher)
            })       
    }
    return(
        <>
            <div className="flex-container">
            <h3>Edit Medicine</h3>
            </div>
            
            
            <Search inventoryList={inventoryList} setInventoryList={setInventoryList} setShowList={setShowList} />
            <InventoryItem />
           { showForm ? 
                <EditForm form={form} setForm={setForm} submitForm={submitForm} />
            : null
            }
            {
                showList ? <DrugList inventoryList={inventoryList} setInventoryList={setInventoryList}  setForm={setForm} setShowForm={setShowForm} refresher={refresher} setRefresher={setRefresher} setShowList={setShowList} showList={showList} /> : null
            }
        </>
    )
}