import { Application } from '../models/Application.js';

// Welcome msgs
export const greetUser = (req, res) => {
    res.status(200).json({ message: 'Welcome to the Job Tracker API!' });
}

// CREATE
export const createApplication = async (req, res) => {
    try {
        const app = new Application(req.body);
        await app.save();
        res.status(201).json(app);
    } catch (err) {
        res.status(500).json({ message: 'Error creating application', error: err.message});
    }
};

// READ ALL
export const getApplications = async (req, res) => {
    try {
        const app = await Application.find().sort({ createdAt: -1});
        res.status(200).json(app);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving applications', error: err.message });
    }
};

// READ ONE
export const getApplication = async (req, res) => {
    try {
        const app = await Application.findById(req.params.id);
        if (!app) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(app);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving application', error: err.message });
    }
};

// UPDATE
export const updateApplication = async (req, res) => {
    try {
        const app = await Application.findByIdAndUpdate(id, req.body, { new: true });
        res.json(app);
    } catch (err) {
        res.status(500).json({ message: 'Error updating application', error: err.message });
    }
};

// DELETE
export const deleteApplication = async (req, res) => {
    try {
        const app = await Application.findByIdAndDelete(req.params.id);
        if (!app) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: 'Error deleting application', error: err.message });
    }
};