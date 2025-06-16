import Navbar from '../components/Navbar';
import '../styles/Services.css';
import React, { useEffect, useState } from 'react';
import { getServices } from '../services/servicesAPI';
import mainImg from '../assets/serviceAssets/dog_bath.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
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

      {/* HERO BANNER */}
      <section id="mainImgBanner" className="container-fluid px-0">
        <img
          src={mainImg}
          className="img-fluid"
          alt="Dog getting a bath by groomer"
        />
      </section>

      {/* INTRO SECTION */}
      <section id="introSection">
        <div id="titleAndParagraph" className="container-fluid">
          <div className="row">
            <div id="sigServLeft" className="col-12 col-md-5">
              <h2 id="sigServH2M2L" className="pt-5 display-3">
                Our<br />Signature<br />Services
              </h2>
              <h2 id="sigServH2S" className="pt-5 display-3">
                Our Signature<br />Services
              </h2>
            </div>

            <hr id="sigServHr" className="col-md-2" />

            <div className="col-12 col-md-5">
              <p id="sigServP">
                At En Vogue Pet Grooming in San Francisco, we offer an exclusive collection of signature pet services crafted for the most discerning pet parents. From couture-level grooming and indulgent spa baths to our boutique doggy day care, refined overnight boarding, and elegant dog walking experiences — every offering is delivered with intention, precision, and poise. This is care reimagined — where wellness meets sophistication, and every visit feels like a five-star retreat for your cherished companion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <main id="mainSection" className="container-fluid">
        {services.map((service, index) => (
          <div className="card mainCard mb-4 mx-4" key={service._id}>
            <div className="row g-0">
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-6 order-0">
                    <img
                      src={service.imageUrl}
                      className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                      alt={service.subtitle}
                    />
                  </div>

                  <div className="col-md-6 pt-5 order-1">
                    <div className="card-body h-100 d-flex flex-column">
                      <h5 className="card-title text-center title">{service.name}</h5>
                      <p className="card-text text-center subtitle">{service.subtitle}</p>
                      <Link className="text-center read-more" to={`/services/${service._id}`}>Read More</Link>
                      <hr className="cardHr" />
                      <p className="card-text fw-bold mb-2 text-center subtitle">
                        Approx. {service.durationHours} hrs (Time Varies)
                      </p>
                      <p className="card-text fw-bold mb-2 text-center subtitle">
                        Starts at ${service.price}
                      </p>
                      <div className="text-center pt-3">
                        <button id="mainCrdBtn" className="btn">
                          <Link className="buttonStyle">Book Now</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 pt-5 order-1 order-md-0">
                    <div className="card-body h-100 d-flex flex-column">
                      <h5 className="card-title text-center title">{service.name}</h5>
                      <p className="card-text text-center subtitle">{service.subtitle}</p>
                      <Link className="text-center read-more" to={`/services/${service._id}`}>Read More</Link>
                      <hr className="cardHr" />
                      <p className="card-text fw-bold mb-2 text-center subtitle">
                        Approx. {service.durationHours} hrs (Time Varies)
                      </p>
                      <p className="card-text fw-bold mb-2 text-center subtitle">
                        Starts at ${service.price}
                      </p>
                      <div className="text-center pt-3">
                        <button id="mainCrdBtn" className="btn">
                          <Link className="buttonStyle">Book Now</Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 order-0 order-md-1">
                    <img
                      src={service.imageUrl}
                      className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                      alt={service.subtitle}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Services;
