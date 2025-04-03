import express from 'express';
import walletControllers from '../controllers/walletControllers.js';
import { requireLogin } from '../config/middlewareConfig.js';

const router = express.Router(); 

router.get('/', requireLogin, walletControllers.getBalanceStatus); 
router.get('/:userId', requireLogin,  walletControllers.getBalance); 

export default router; 