import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Homepage.css';
// import haircut from '../assets/aboutAssets/haircut.mp4'

const Homepage = () => {
    return (
        <>
            <Navbar />

            <div className='text-center container-fluid'>
                <h1  id='heroText'>En Vogue</h1>
                <p>Professional grooming services to keep your pets looking and feeling their best.</p>
                <button href="/services" variant="primary" size="lg">View our Services</button>
            </div>

            {/* <div className="text-center py-2 container-fluid" id='headerContainer'>
                <video className='bg-video' autoplay loop muted>
                    <source src={haircut} type='video/mp4' />
                </video>
            </div> */}

            <Footer />
        </> 
    );
};

export default Homepage;