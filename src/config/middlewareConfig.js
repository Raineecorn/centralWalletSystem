import { checkLogin } from "../utils/sessionUtils.js";
import statusCodes from "./statusCodes.js";

export function requireLogin(req, res, next){
    if(!checkLogin(req)){
        res.status(statusCodes.UNAUTHORIZED).json({
            error : "Unauthorized", 
            message: "Please Login First", 
            link: "localhost:3000/auth/login"
        })
    }
    next();  
}