import React from 'react'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function Header() {
  return (
    // <Router>
      <div className='flex justify-between align-center p-1 border-solid border-b-2 border-gray-200 '>
        <div className='flex p-2 text-xl' >
          <h1 className='  flex justify-center text-black '>Francisian</h1>
        </div>
          <div className='flex justify-center p-2 text-blue-800' >
              <ul className='flex gap-6 justify-center align-middle' >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/announcements">Announcements</Link>
              </li>
              <li>
              <Link to="/events">Events</Link>

              </li>
              <li>
                <NavLink to="/market" >
                  Market
                </NavLink>
              </li>
              <li>Assignments</li>
          </ul>
          </div>
      </div>
    // </Router>
  )
}

export default Header
