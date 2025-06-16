
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="card mainCard mb-4 mx-4" key={service._id}>
      <div className="row g-0">
        {isEven ? (
          <>
            <div className="col-md-6 order-0">
              <img
                src={service.imageUrl}
                className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                alt={service.subtitle}
              />
            </div>
            <div className="col-md-6 pt-5 order-1">
              <CardContent service={service} />
            </div>
          </>
        ) : (
          <>
            <div className="col-md-6 pt-5 order-1 order-md-0">
              <CardContent service={service} />
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
  );
};

const CardContent = ({ service }) => (
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
);

export default ServiceCard;
