import express from 'express';
import debitControllers from '../controllers/debitControllers.js'; 


const router = express.Router(); 

router.get('/', debitControllers.getDebit); 
router.post('/:userId', debitControllers.getDebitUser); 

export default router; 