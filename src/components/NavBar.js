import React from 'react'

const NavBar = () => {
  return (
    <>
    <nav className='main-nav'>
    {/* 1st logo */}
    <div className="logo">
        <h2>
            <span>L</span>amia
            <span>F</span>atiha
        </h2>
    </div>
    <div className="menu-link">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">About</a></li>
            <li><a href="index.html">Contact</a></li>
            <li><a href="index.html">Blog</a></li>
        </ul>
    </div>

    </nav>
    </>
  )
}

export default NavBar
