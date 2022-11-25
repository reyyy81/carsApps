import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/home"><div className='nav-button'>Home</div></Link>
      <Link to="/blogs"><div className='nav-button'>Blogs</div></Link>
      <Link to="/news"><div className='nav-button'>News</div></Link>
      <Link to="/art"><div className='nav-button'>Photographs</div></Link>
      <Link to="/blogs"><div className='nav-button'>Posts</div></Link>
      {/* <Link to="/blogs"><div className='nav-button'>Contact Us</div></Link> */}

    </div>
  )
}

export default Navbar