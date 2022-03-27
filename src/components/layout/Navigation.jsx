import { Link } from "react-router-dom"
export default function Navigation({ handleLogout }) {
    return(
        <>
        <div className="sidenav" >
        <Link to='/dashboard/overview'>Dashboard</Link>
        <Link to='/'>Inventory</Link>
        <Link to='/'>Reports</Link>
        <Link to='/about'>About</Link>
        <Link to="/">
            <span onClick={handleLogout}>Logout</span>
        </Link>
        </div>
        </>
    )
}