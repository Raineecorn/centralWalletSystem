import auth from "../models/auth.js";
import cryptoServices from "./cryptoServices.js";


const usernameAuth = auth.userNameLogin; 
const passwordAuth = auth.passwordLogin;

export function verifyCredentials(username, password){
  const encryptedPassword = cryptoServices.encrypt(password) 

  return(username === usernameAuth && encryptedPassword === passwordAuth)? true : false ; 
};

