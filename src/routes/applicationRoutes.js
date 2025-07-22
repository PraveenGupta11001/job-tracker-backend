import express from 'express';
import {
    greetUser,
    createApplication,
    getApplications,
    getApplication,
    updateApplication,
    deleteApplication
} from '../controllers/applicationController.js';

const router = express.Router();

router.get('', greetUser);
router.post('/create', createApplication);
router.get('/get_all', getApplications);
router.get('/get/:id', getApplication);
router.put('/update/:id', updateApplication);
router.delete('/delete/:id', deleteApplication);

export default router;