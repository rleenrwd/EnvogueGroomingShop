import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { createBooking } from '../services/bookingsAPI';
import {getServices} from '../services/servicesAPI';
import { useState, useEffect } from 'react';
import '../styles/Booking.css';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        date: '',
        notes: ''
    });

    const [services, setServices] = useState([]);


    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await getServices();
                setServices(data);
            } catch (err) {
                console.error('Error fetching services: ', err.message);
            }
        };
        fetchServices();
    }, []);

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createBooking(formData);
            setSuccessMsg('Booking submitted successfully!');
            setErrorMsg('');
            setFormData({name: '', email: '', service:'', date:'', note:''});
        } catch (err) {
            console.error(err);
            setErrorMsg('Something went wrong. Please try again.');
            setSuccessMsg('');
        }
    };

    return (
        <>
            <Navbar />
            <div className='container-fluid text-center'>
                <h1>This is the Booking page</h1>

                {successMsg && <div className='alert alert-success'>{successMsg}</div>}
                {errorMsg && <div className='alert alert-danger'>{errorMsg}</div>}

                <form onSubmit={handleSubmit} className='booking-form'>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>

                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">Email</label>

                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="service" className="form-label">Select Service</label>

                            <select
                            id="service"
                            name="service"
                            className="form-select"
                            value = {formData.service}
                            onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                            >
                                <option value="">Choose a service</option>
                                {services.map(service => (
                                    <option key={service._id} value={service.name}>
                                    {service.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="date" className="form-label">Select Date</label>

                            <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
                        </div>


                        <div className="col-12 mb-3">
                            <textarea className="form-control" name="notes" rows="4" value={formData.notes} onChange={handleChange} placeholder="Additional notes (optional)" />
                        </div>

                        <div className="text-center">
                        <button type="submit" className="btn btn-dark px-5">Submit Booking</button>
                        </div>
                    </div>
                </form>

            </div>
            <Footer />
        </>
    );
};

export default Booking;