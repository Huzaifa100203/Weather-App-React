import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Data from './components/Data'
import Navbar from './components/Navbar'
import Delhi from './components/Delhi'
import Mumbai from './components/Mumbai'
import Chennai from './components/Chennai'
import Kolkata from './components/Kolkata'
import Indore from './components/Indore'
import Weather from './components/Weather'


function App() {
  
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={ <Weather/>}/>
      <Route path='/indore' element={ <Indore/>}/>
      <Route path='/delhi' element={ <Delhi/>}/>
      <Route path='/mumbai' element={ <Mumbai/>}/>
      <Route path='/chennai' element={ <Chennai/>}/>
      <Route path='/kolkata' element={ <Kolkata/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App