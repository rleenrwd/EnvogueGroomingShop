import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../assets/navbarAssets/evLogo.png'

const Navbar = () => {
    return (
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
        En Vogue Pet Grooming</Link>
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
              <Link className="nav-link" to="/booking">Booking</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/testimonials">Testimonials</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    );
};

export default Navbar;