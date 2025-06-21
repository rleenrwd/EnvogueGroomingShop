import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Homepage.css';
import yorkie from '../assets/homepageAssets/yorkie.jpg';

const Homepage = () => {
    return (
        <>
            <Navbar />

            {/* HERO SECTION */}
            <section id='heroSection' className='text-center container-fluid'>
                <h1  id='heroText'>En Vogue</h1>
            </section>


            
            {/* ELEVATED STANDARD SECTION
            <section id='elevatedStandard'>
                <div className='container-fluid'>
                    <div className='row g-0'>
                        <div className='col elLeft'>
                            <h2 className='display-2'>An Elevated Standard of Pet Care</h2>
                        </div>

                        <div className='col elRight'>
                            <img src={yorkie} className='img-fluid' alt='A Yorkie getting a haircut by a dog groomer' />
                            
                        </div>
                    </div>
                </div>
            </section>

            <section id='signatureServices'>
                <div className='text-center container-fluid'>
                    <h2 className=' display-2'>Our Signature Services</h2>
                </div>
            </section> */}

            <Footer />
        </> 
    );
};

export default Homepage;