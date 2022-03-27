import { Link } from "react-router-dom"
export default function Navigation({ handleLogout, isLogged }) {
    return(
        <>
        {
            (isLogged ? 
                <div className="sidenav" >
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/'>Inventory</Link>
                <Link to='/'>Reports</Link>        
                <Link to="/"><span onClick={handleLogout}>Logout</span></Link>
                </div>
            :
                <></>
            )
        }        
        </>
    )
}