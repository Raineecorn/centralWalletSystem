import statusCodes from '../config/statusCodes.js';
import db from '../models/db.js';

const getBalanceStatus = async (req, res) => {
    res.status(200).send('balance connection is OK'); 
};

const getBalance = async (req, res) => {
    try {
        const user = await db.readDB(); 
        res.status(statusCodes.OK).json({
            "Status" : user
        });
    }catch(error){
        res.status(statusCodes.NOT_FOUND).json({
            error : error.message
        });
    }
};

export default { 
    getBalance,
    getBalanceStatus
};