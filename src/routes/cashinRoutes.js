import express from 'express';
import cashinControllers from '../controllers/cashinControllers.js'; 
import { requireLogin } from '../config/middlewareConfig.js';
const router = express.Router(); 

router.get('/', requireLogin, cashinControllers.getCashIn); 
router.post('/:userId', requireLogin, cashinControllers.getCashInUser); 
export default router; 