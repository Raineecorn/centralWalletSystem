import { checkLogin } from "../utils/sessionUtils.js";
import statusCodes from "./statusCodes.js";

export function requireLogin(req, res, next){
    if(!checkLogin(req)){
        res.status(statusCodes.UNAUTHORIZED).json({
            error : "Unauthorized", 
            message: 'Please log in first using POST /auth/login with body: { "username": "user_name", "password": "user_password" }',
        })
    }
    next();  
}