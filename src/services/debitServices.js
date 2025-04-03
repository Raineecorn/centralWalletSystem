import db from '../models/db.js'; 
import { debitSchema } from '../validators/joi.js';

export const debitUser = async (amount) => {

    await debitSchema.validateAsync({ amount }); 

    const data = await db.readDB(); 
    const user = data.user; 

    if(!user) throw new AppError('User not found'); 
    user.balance -= amount; 
    await db.editDB({user}); 
    return user; 

}; 


