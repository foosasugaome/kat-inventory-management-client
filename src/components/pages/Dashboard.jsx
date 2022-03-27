import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import DashboardUsers from './dashboard/DashboardUsers'
import Overview from './dashboard/Overview'
import Users from './dashboard/Users'

export default function Dashboard ({ currentUser, setCurrentUser }) {
  const [showComponent, setShowComponent] = useState(false)
console.log(showComponent)
  return (
    <>
      <div className='flex-menu-container'>
        <div>
          <button onClick={() => setShowComponent(false)}  className={showComponent ? 'button-nav' : 'button-nav-selected'}> Overview </button>
        </div>
        <div>
          <button onClick={() => setShowComponent(true)}  className={showComponent ? 'button-nav-selected' : 'button-nav'}> Users </button>
        </div>
      </div>

      {showComponent ? (
        <Users />
      ) : (
        <Overview currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </>
  )
}
