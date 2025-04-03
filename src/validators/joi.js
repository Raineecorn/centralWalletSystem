import Joi from "joi";

export const cashInSchema = Joi.object({
    amount: Joi.number().positive().required()
}); 

export const debitSchema = Joi.object({
    amount: Joi.number().positive().required()
}); 
