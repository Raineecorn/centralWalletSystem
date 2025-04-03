import express from 'express';
import walletControllers from '../controllers/walletControllers.js';

const router = express.Router(); 

router.get('/', walletControllers.getBalanceStatus); 
router.get('/:userId', walletControllers.getBalance); 

export default router; 