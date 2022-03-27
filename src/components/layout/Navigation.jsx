import { Link } from "react-router-dom"
export default function Navigation({ handleLogout, isLogged }) {
    return(
        <>
        {
            (isLogged ? 
                <div className="sidenav" >
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/reports'>Reports</Link>        
                <Link to="/"><span onClick={handleLogout}>Logout</span></Link>
                </div>
            :
                <div className="sidenav">
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </div>
            )
        }        
        </>
    )
}