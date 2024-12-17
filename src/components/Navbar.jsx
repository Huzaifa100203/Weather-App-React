import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <>
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/mumbai'>Mumbai</Link></li>
            <li><Link to='/delhi'>Delhi</Link></li>
            <li><Link to='/indore'>Indore</Link></li>
            <li><Link to='/chennai'>Chennai</Link></li>
            <li><Link to='/kolkata'>Kolkata</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar