import { useState } from "react"
import { Link } from "react-router-dom"
export default function Navigation({ handleLogout, isLogged, currentUser }) {
    const [displayComponent, setDisplayComponent] = useState('0')    
    return(
        <>
        {
            (isLogged ? 
                <div className="sidenav" >
                <h2>Welcome, {currentUser.username.toUpperCase()}</h2>
                <Link to='/dashboard' onClick={() => setDisplayComponent('0')} className={displayComponent === '0' ? 'sidenav-selected' : ''}>Dashboard</Link>
                <Link to='/inventory' onClick={() => setDisplayComponent('1')} className={displayComponent === '1' ? 'sidenav-selected' : ''}>Inventory</Link>
                <Link to='/report' onClick={() => setDisplayComponent('2')} className={displayComponent === '2' ? 'sidenav-selected' : ''}>Reports</Link>        
                <Link to="/" onClick={() => setDisplayComponent('3')} className={displayComponent === '3' ? 'sidenav-selected' : ''}><span onClick={handleLogout}>Logout</span></Link>
                </div>
            :
                <div className="sidenav">
                    <Link to='/register' onClick={() => setDisplayComponent('4')} className={displayComponent === '4' ? 'sidenav-selected' : ''}>Register</Link>
                    <Link to='/login'  onClick={() => setDisplayComponent('5')} className={displayComponent === '5' ? 'sidenav-selected' : ''}>Login</Link>
                </div>
            )
        }        
        </>
    )
}