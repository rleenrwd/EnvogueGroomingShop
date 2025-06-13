const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');
const { protect } = require('../middleware/authMiddleware');

// PUBLIC ROUTE(S)
router.get('/', testimonialController.getAllTestimonials);

//ADMIN ROUTES
router.post('/', protect, testimonialController.createTestimonial);
router.put('/:id', protect, testimonialController.updateTestimonial);
router.delete('/:id', protect, testimonialController.deleteTesimonial);

module.exports = router;