import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Search } from './components/Search'
import { SideNavbar } from './components/SideNavbar'
import Home from "./pages/Home";
import FetchData from './components/FetchData';
import FavoritesList from './components/FavoritesList';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import LatestNews from './components/LatestNews';

const App = () => {
  return (
    <>
      <Navbar/>
      <Search/>
      <div className='d-flex'>
        <Router>
          <SideNavbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/general" element={<FetchData cat="general"/>}/>
            <Route path="/business" element={<FetchData cat="business"/>}/>
            <Route path="/health" element={<FetchData cat="health"/>}/>
            <Route path="/science" element={<FetchData cat="science"/>}/>
            <Route path="/sports" element={<FetchData cat="sports"/>}/>
            <Route path="/technology" element={<FetchData cat="technology"/>}/>
            <Route path="/favorites" element={<FavoritesList/>}/>
          </Routes>
        </Router>
        <LatestNews/>
      </div>
    </>
  )
}

export default App
