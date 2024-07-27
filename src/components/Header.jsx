import React from 'react'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import newlogo from '../assets/logo1.png'


function Header() {
  return (
    // <Router>
      <div className='flex justify-between items-center w-screen  border-solid border-b-2 border-black bg-gray-800 '>
        <div className='flex p-2 text-xl' >
          <img className='w-22 h-10' src={newlogo} alt="loading.." />
        </div>
          <div className='flex justify-center p-2 text-blue-800 scroll-smooth' >
              <ul className='flex gap-6 justify-center items-center' >
              <li className='text-gray-400 hover:bg-gray-700 hover:text-white p-2 rounded-md'>
                <NavLink to="/" className={({ isActive }) => (isActive ? "text-white" : 'text-white')} >
                  Home
                </NavLink>
              </li>
              <li className='text-gray-400 hover:bg-gray-700 hover:text-white p-2 rounded-md'>
                <NavLink to="/announcements" className={({ isActive }) => (isActive ? "text-white" : 'text-white')} >
                  Announcements
                </NavLink>
              </li>
              <li className='text-gray-400 hover:bg-gray-700 hover:text-white p-2 rounded-md'>
                <NavLink to="/confession" className={({ isActive }) => (isActive ? "text-white" : 'text-white')} >
                Confessions
                </NavLink>
              </li>
              <li className='text-gray-400 hover:bg-gray-700 hover:text-white p-2 rounded-md' >
                <NavLink to="/market" className={({ isActive }) => (isActive ? "text-white" : 'text-white')} >
                  Marketplace
                </NavLink>
              </li>
              <li className='text-gray-400 hover:bg-gray-700 hover:text-white p-2 rounded-md' >
                <NavLink to="/assignments" className={({ isActive }) => (isActive ?   "text-white" : 'text-white p-2') } >
                Voting
                </NavLink>
              </li>
          </ul>
          </div>
      </div>
    // </Router>
  )
}

export default Header
