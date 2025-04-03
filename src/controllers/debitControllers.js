
import { debitUser } from '../services/debitServices.js';
import statusCodes from '../config/statusCodes.js';

const getDebit = async (req, res) => {
    res.send('debitt heree');
}; 

const getDebitUser = async (req, res) => {
    try {
        const { amount } = req.body; 
        const user = await debitUser(amount); 

        res.status(statusCodes.OK).json({
            message: "debit successful!",
            "amount" : amount, 
            "name": user.name,
            "balance": user.balance
        });
    }catch(error){
         res.status(error.StatusCode || statusCodes.BAD_REQUEST).json({
            error : error.message
        });
    }
}


export default {
    getDebit, 
    getDebitUser
};