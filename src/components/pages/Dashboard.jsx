import { useState } from 'react'
import Overview from './dashboard/Overview'
import Users from './dashboard/Users'

export default function Dashboard ({ currentUser, setCurrentUser }) {
  const [showComponent, setShowComponent] = useState(false)
  return (
    <>
      <div className='flex-container'>          
        <h3>Dashboard</h3>
      </div>
      <div className='flex-menu-container'>
        <div>
          <button onClick={() => setShowComponent(false)}  className={showComponent ? 'button-nav' : 'button-nav-selected'}> Overview </button>
        </div>
        <div>
          <button onClick={() => setShowComponent(true)}  className={showComponent ? 'button-nav-selected' : 'button-nav'}> Users </button>
        </div>        
      </div>
      <div className='tab-container'>
      {showComponent ? (
        <Users />
      ) : (
        <Overview currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
        
      </div>
    </>
  )
}
