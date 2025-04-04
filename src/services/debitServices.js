import db from '../models/db.js'; 
import { debitSchema } from '../validators/joi.js';

export const debitUser = async (amount) => {

    await debitSchema.validateAsync({ amount }); 

    const data = await db.readDB(); 
    const user = data.user; 

    walletBalance = user.balance; 

    walletBalance -= amount; 
    await db.editDB({user}); 
    return user; 

}; 


