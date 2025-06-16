import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../assets/navbarAssets/evLogo.png'
import '../styles/Navbar.css';

const Navbar = () => {
    return (
  <>
    <div className='pt-2 pawsh text-center'>
        {/* <p>The Ultimate PAWsh Experience</p> */}
        <p>Treat your fur-baby to the ultimate PAWsh experience in San Francisco, CA!</p>
        <small>#PawsEnVogue</small>
    </div>

    <nav id='mainNav' className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img 
        id='brandLogo'
        src={BrandLogo} 
        width='120px' 
        alt='En Vogue Pet Grooming Brand Logo'  
        className='img-fluid'
        />
        <span id='shopName'>En Vogue Pet Grooming</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/bookings">Booking</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/testimonials">Testimonials</Link>
            </li>

            <li className="nav-item">
              <button id='navbarBtn' className='btn'><Link className="nav-link buttonStyle" to="/admin">Admin Login</Link></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
    );
};
export default Navbar;