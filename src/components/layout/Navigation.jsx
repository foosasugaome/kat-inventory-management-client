import { Link } from "react-router-dom"
export default function Navigation() {
    return(
        <>
        <div className="sidenav" >
        <Link to='/'>Dashboard</Link>
        <Link to='/'>Inventory</Link>
        <Link to='/'>Reports</Link>
        <Link to='/about'>About</Link>
        <Link to='/logout'>Logout</Link>
        </div>
        </>
    )
}