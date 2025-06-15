import Navbar from '../components/Navbar';
import '../styles/Services.css';
import React, { useEffect, useState} from 'react';
import { getServices } from '../services/servicesAPI';
import mainImg from '../assets/serviceAssets/dog_bath.jpg';



const Services = ()  => {
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
    }, []); // This empty array tells react when to run the code inside useEffect
            // An empty array means, run the function only once at the beginning(first mounts)
            // Without the array at the end, your code inside useEffect will run on every render and 
            // That's not what we want when fetching data. So for api calls, use the [] empty array
            // To avoid multiple unnecessary requests. 



    return (
        <>
         <Navbar />
         <div className='container-fluid px-0' id='mainImg'>

            <img 
            src={mainImg} 
            className='img-fluid' 
            alt='Dog getting a bath by groomer' />

         </div>

         <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <h2 className='text-center pt-5'>Our Signature Services</h2>
                </div>

                <div className='col'>
                    <h2 className='text-center pt-5'>Our Signature Services</h2>
                </div>
            </div>
         </div>
        </>
    );
};

export default Services;