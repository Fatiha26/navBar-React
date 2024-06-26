import React, { useState } from 'react';
import './navbar.css'
import { FaFacebookSquare, FaInstagram, FaYoutube, FaHamburger} from "react-icons/fa";

const NavBar = () => {
    const [show,setShow] = useState(false);
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
    <div className={show?"menu-link ham-menu" : "menu-link"}>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">About</a></li>
            <li><a href="index.html">Contact</a></li>
            <li><a href="index.html">Blog</a></li>
        </ul>
    </div>
    <div className="icons">
        <ul className="media-desktop">
            <li><a href="#" ></a><FaFacebookSquare className='fb'/></li>
            <li><a href="#" ></a><FaInstagram className='insta'/></li>
            <li><a href="#" ></a><FaYoutube className='yt' /></li>
        </ul>
        <div className="ham-menu">
            <a href="#" onClick={()=>{
                setShow(!show)
            }}>
            <FaHamburger/>
            </a>
        </div>
    </div>
</nav>
    {/* nav ends here */}
    <section className="hero-section">
        <p>Welcome To</p>
        <h1>React Navbar Project</h1>
    </section>
    </>
  )
}

export default NavBar
