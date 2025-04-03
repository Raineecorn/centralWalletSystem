import { cashInUser } from '../services/cashinServices.js';
import statusCodes from '../config/statusCodes.js';

const getCashIn = async (req, res) => {
    res.send('cashin here!!'); 
}; 

const getCashInUser = async (req, res) => {
     try {
         const { amount } = req.body; 
         const user = await cashInUser(amount); 
        
         res.status(statusCodes.OK).json({
             message: "Cash-in successful!",
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
    getCashIn,
    getCashInUser
}; 