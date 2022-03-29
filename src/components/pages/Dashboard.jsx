import { useState } from 'react'
import Overview from './dashboard/Overview'
import Users from './dashboard/Users'
import EditUser from './dashboard/EditUser'

export default function Dashboard ({ currentUser, setCurrentUser, users, setUsers }) {
    const [showComponent, setShowComponent] = useState('0')
    return (
        <>
            <div className='flex-container'>          
                <h2>Dashboard</h2>
            </div>
            <div className='flex-menu-container'>
                <div>
                <button onClick={() => setShowComponent('0')}  className={showComponent === '0' ? 'button-nav-selected' : 'button-nav'}> Overview </button>
                </div>
                <div>
                <button onClick={() => setShowComponent('1')}  className={showComponent === '1' ? 'button-nav-selected' : 'button-nav'}> Users </button>
                </div>      
                <div>
                <button onClick={() => setShowComponent('2')}  className={showComponent === '2' ? 'button-nav-selected' : 'button-nav'}> Edit Users </button>
                </div>      
            </div>
            <div className='tab-container'>
                {showComponent === '0' ? <Overview currentUser={currentUser} users={users} setUsers={setUsers} /> : null}
                {showComponent === '1' ? <Users users={users} /> : null}
                {showComponent === '2' ? <EditUser currentUser={currentUser} users={users} setUsers={setUsers} /> : null}
            </div>
        </>
    )
}
