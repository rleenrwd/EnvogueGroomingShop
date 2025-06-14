import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import About from './pages/About';
import ServiceShow from './pages/ServiceShow';
import Booking from './pages/Booking';
import BookingShow from './pages/BookingShow';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceShow />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/bookings/:id" element={<BookingShow />} />
      </Routes>
    </Router>
  );
};

export default App;