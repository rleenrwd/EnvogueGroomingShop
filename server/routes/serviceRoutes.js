const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');

// Public Routes
router.get('/', serviceController.getAllServices);

// Admin Routes
router.post('/', protect, serviceController.createService);
router.get('/:id', serviceController.getServiceById);
router.put('/:id', protect, serviceController.updateService);
router.delete('/:id', protect, serviceController.deleteService);

module.exports = router;