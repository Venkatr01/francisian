import React from 'react'
import Header from './components/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Announcements from './components/Announcements';
import Market from './components/Market';
import Root from './components/Root';
import Paths from './components/Paths';

function App() {
  return (
    <>
    <Paths/>
    </>
  )
}

export default App
