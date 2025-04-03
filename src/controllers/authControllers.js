import statusCodes from '../config/statusCodes.js';
import {verifyCredentials} from '../services/authServices.js';
import { setLogin } from "../utils/sessionUtils.js";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const isAuthorized = await verifyCredentials(username, password);
    
    if (isAuthorized) {
      setLogin(); 
      return res.status(statusCodes.OK).json({
        message: 'Login successful',
        links: [
          { name: 'balance', url: '/balance' },
          { name: 'Cash-in', url: '/cashin' },
          { name: 'debit', url: '/debit' }
        ]
      });
    } else {
      return res.status(statusCodes.UNAUTHORIZED).json({ error: 'Invalid credentials' });
    }
    
  } catch (error) {
    console.error("Login Error:", error.message);
    return res.status(statusCodes.SERVER_ERROR).json({ error: 'Login failed' });
  }
};

export default login;
