import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Announcements from './Announcements';
import Market from './Market';
import Root from './Root';
import Home from './Home';
import Events from './Events';
import Assignments from './Assignments';
import Confession from './Confession';

function Paths() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Root/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/announcements' element={<Announcements/>} />
            <Route path='/confession' element={<Events/>} />
            <Route path='/market' element= { <Market /> } />
            <Route path='/assignments' element= { <Assignments /> } />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default Paths
