import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../assets/navbarAssets/transparent.png'
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
        <Link className='onSmallOnly' to="/services">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
          </svg>
        </Link>
        

        <Link className="navbar-brand" to="/">
        <img 
        id='brandLogo'
        src={BrandLogo} 
        width='90px' 
        alt='En Vogue Pet Grooming Brand Logo'  
        className='img-fluid'
        />
        <span id='shopName'> En Vogue Pet Grooming</span></Link>

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