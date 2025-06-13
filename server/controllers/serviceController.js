const Service = require('../models/Service');

exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// ADMIN ONLY
exports.createService = async (req, res) => {
    const service = new Service(req.body);
    try {
        const newService = await service.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

exports.updateService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    if (!service) return res.status(404).json({message: 'Service not found'});

    res.json(service);

    } catch (err) {
        res.status(500).json({message: err.message});
    }
    
}

exports.deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);

        if (!service) return res.status(404).json({message: 'Service not found'});

        res.json({message: 'The requested service has been deleted.'});

    } catch (err) {
        res.status(404).json({message: 'Service not found'});
    }
}