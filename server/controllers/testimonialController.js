const Testimonial = require('../models/Testimonial');


exports.getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.createTestimonial = async (req, res) => {
    try {
        const {name, quote, avatar} = req.body;
        const newTestimonial = new Testimonial({name, quote, avatar});
        await newTestimonial.save();
        res.status(201).json(newTestimonial);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
} 

exports.updateTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true} // tells mongoose to return the updated testimonial, and not the original one.
        );

        if (!testimonial) {
            return res.status(404).json({message: 'Testimonial not found'});
        }

        res.json(testimonial);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

exports.deleteTesimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
        res.json({message: 'Deleted successfully'});
        if (!testimonial) {
            return res.status(404).json({message : 'Testimonial not found'});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}