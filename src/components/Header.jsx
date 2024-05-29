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
      <div className='flex justify-between items-center p-1 border-solid border-b-2 border-black bg-header'>
        <div className='flex p-2 text-xl' >
          <h1 className='  flex justify-center  text-white font-press-start '>Francisian</h1>
        </div>
          <div className='flex justify-center p-2 text-blue-800 scroll-smooth' >
              <ul className='flex gap-6 justify-center items-center' >
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "text-white" : 'text-active')} >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/announcements" className={({ isActive }) => (isActive ? "text-white" : 'text-active')} >
                  Announcements
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className={({ isActive }) => (isActive ? "text-white" : 'text-active')} >
                Events
                </NavLink>
              </li>
              <li className='' >
                <NavLink to="/market" className={({ isActive }) => (isActive ? "text-white" : 'text-active')} >
                  Marketplace
                </NavLink>
              </li>
              <li className='' >
                <NavLink to="/assignments" className={({ isActive }) => (isActive ?   "text-white" : 'text-active') } >
                Assignments
                </NavLink>
              </li>
          </ul>
          </div>
      </div>
    // </Router>
  )
}

export default Header
