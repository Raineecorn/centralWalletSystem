import express from 'express';

const router = express.Router(); 


router.get('/', async (req, res) => {
    res.send('Hello welcome to this wapp xD!'); 
} )

export default router; 