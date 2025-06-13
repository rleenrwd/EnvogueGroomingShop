import React from 'react';
import Navbar from '../components/Navbar';
import './Homepage.css';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <div className="text-center py-5">
                <h1>Welcome to En Vogue Pet Grooming</h1>
                <p>Professional grooming services to keep your pets looking and feeling their best.</p>
                <button href="/services" variant="primary" size="lg">View our Services</button>
            </div>
        
        </>
    )
}

export default Homepage;