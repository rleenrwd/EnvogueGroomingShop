const Testimonial = require('../models/Testimonial');


const getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({message: 'Server error.'});
    }
}
