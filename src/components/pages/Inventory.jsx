import Search from "../Search";
import InventoryList from "./inventory/InventoryList";

export default function Inventory() {
    return(
        <>
        <div className="flex-container">
        Inventory Landing Page
        </div>
        <div className="flex-container">
            <Search />
            <InventoryList />
        </div>
        </>
    )
}