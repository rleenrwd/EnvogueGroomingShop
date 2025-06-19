import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/About.css';

const About = () => {
    return (
        <>
            <Navbar />
            <main id='aboutMain' className='container-fluid'>
                <h1 className='display-1 py-3'>Our Story</h1>
                <hr/>
                <p>What began as a deep love for animals and a dream of working independently has grown into En Vogue — a space where luxury meets compassion. Founded with the vision of bringing joy not only to pets, but to the people who cherish them, En Vogue is a reflection of its owner's devotion to care, creativity, and quality. We believe that every pet, regardless of breed or background, deserves to be treated with unmatched kindness, dignity, and excellence. This isn't just dog grooming — it's a celebration of the bond between pets and their people, delivered with elegance and heart.</p>
                <p className='centerText'>Thank you for your support!<br/><span>- En Vogue </span></p>
                
                <div id='btnContainer' className='container-fluid text-center'>
                    <button className='mainBtn buttonStyle'>View Services</button>
                </div>

                

            </main>
            <Footer />
        </>
    )
}

export default About;