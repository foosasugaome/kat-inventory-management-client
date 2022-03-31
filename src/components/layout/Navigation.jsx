import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navigation({ handleLogout, isLogged, currentUser}) {

    // let today = new Date();
    // let time = today.getHours()

    const [displayComponent, setDisplayComponent] = useState('0')    

    return(
        <>
        {
            (isLogged ? 
                <div className="sidenav" >
                <h4>Logged as : {currentUser.username.toUpperCase()}</h4>
                {/* { time > 3 && time < 12 ? <h4>Good Morning, {currentUser.username.toUpperCase()}</h4> : <></>}
                { time > 11 && time < 18 ? <h4>Good Afternoon, {currentUser.username.toUpperCase()}</h4> : <></>}
                { time > 17 || time < 4 ? <h4>Good Evening, {currentUser.username.toUpperCase()}</h4> : <></>} */}

                <Link to='/dashboard' onClick={() => setDisplayComponent('0')} className={displayComponent === '0' ? 'sidenav-selected' : ''}>Dashboard</Link>
                <Link to='/inventory' onClick={() => setDisplayComponent('1')} className={displayComponent === '1' ? 'sidenav-selected' : ''}>Inventory</Link>
                <Link to='/sales' onClick={() => setDisplayComponent('2')} className={displayComponent === '2' ? 'sidenav-selected' : ''}>Sales</Link>        
                <Link to="/purchases" onClick={() => setDisplayComponent('3')} className={displayComponent === '3' ? 'sidenav-selected' : ''} >Orders</Link>
                {/* <Link to="/" onClick={() => setDisplayComponent('4')} className={displayComponent === '4' ? 'sidenav-selected' : ''} >Reports</Link> */}
                <Link to="/" onClick={() => setDisplayComponent('5')} className={displayComponent === '5' ? 'sidenav-selected' : ''}><span onClick={handleLogout}>Logout</span></Link>
                </div>
            :
                <div className="sidenav">
                    <Link to='/register' onClick={() => setDisplayComponent('6')} className={displayComponent === '6' ? 'sidenav-selected' : ''}>Register</Link>
                    <Link to='/login'  onClick={() => setDisplayComponent('7')} className={displayComponent === '7' ? 'sidenav-selected' : ''}>Login</Link>
                </div>
            )
        }     
        </>
    )
}