const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');
const { protect } = require('../middleware/authMiddleware');

// PUBLIC ROUTE(S)
router.get('/', testimonialController.getAllTestimonials);

//ADMIN ROUTES
router.post('/', protect, testimonialController.createTestimonial);
router.get('/:id', protect, testimonialController.getTestimonialById);
router.put('/:id', protect, testimonialController.updateTestimonial);
router.delete('/:id', protect, testimonialController.deleteTestimonial);

module.exports = router;