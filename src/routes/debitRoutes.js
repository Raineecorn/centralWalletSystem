import express from 'express';
import debitControllers from '../controllers/debitControllers.js'; 
import { requireLogin } from '../config/middlewareConfig.js';

const router = express.Router(); 

router.get('/',  requireLogin, debitControllers.getDebit); 
router.post('/:userId',  requireLogin, debitControllers.getDebitUser); 

export default router; 