import React from 'react'

function Header() {
  return (
    <div className='flex flex-col'>
        <h1 className='text-blue-800 text-2xl flex justify-center p-2'>Francisian</h1>
        <div className='flex justify-center ' >
            <ul className='flex gap-6 justify-center align-middle' >
            <li>Announcements</li>
            <li>Timetable</li>
            <li>Events</li>
            <li>Marketplace</li>
            <li>Assignments</li>
        </ul>
        </div>
    </div>
  )
}

export default Header
