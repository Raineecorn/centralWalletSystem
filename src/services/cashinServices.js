import db from '../models/db.js'; 
import { cashInSchema } from '../validators/joi.js';
import AppError from '../utils/appErrors.js';

export const cashInUser = async (amount) => {
    await cashInSchema.validateAsync({ amount }); 

    const data = await db.readDB(); 
    const user = data.user; 

    if(!user) throw new AppError('User not found', 404); 
    user.balance += amount; 
    await db.editDB({user}); 
    return user; 

}; 


