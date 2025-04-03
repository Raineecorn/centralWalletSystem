import express from 'express';
import cashinControllers from '../controllers/cashinControllers.js'; 

const router = express.Router(); 

router.get('/', cashinControllers.getCashIn); 
router.post('/:userId', cashinControllers.getCashInUser); 
export default router; 