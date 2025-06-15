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
    }, []); 



    return (
    <>
         <Navbar />
         <section id='mainImgBanner' className='container-fluid px-0' >

            <img 
            src={mainImg} 
            className='img-fluid' 
            alt='Dog getting a bath by groomer' />

         </section>

        <section id='services'>
            <div id='titleAndParagraph' className='container-fluid'>
                <div className='row'>
                    <div id='sigServLeft' className='col-12 col-md-5'>
                        <h2 id='sigServH2M2L' className='pt-5 display-3'>Our<br />Signature<br />Services</h2>
                        <h2 id='sigServH2S' className='pt-5 display-3'>Our Signature<br/>Services</h2>
                    </div>

                    <hr id='sigServHr' className='col-md-2' />

                    <div className='col-12 col-md-5'>
                        <p id='sigServP'>
                            At En Vogue Pet Grooming in San Francisco, we offer an exclusive collection of signature pet services crafted for the most discerning pet parents. From couture-level grooming and indulgent spa baths to our boutique doggy day care, refined overnight boarding, and elegant dog walking experiences — every offering is delivered with intention, precision, and poise. This is care reimagined — where wellness meets sophistication, and every visit feels like a five-star retreat for your cherished companion.</p>
                    </div>
                </div>
            </div>

            <div id='serviceCards' className='container-fluid'>

            </div>
        </section>
    </>
    );
};

export default Services;