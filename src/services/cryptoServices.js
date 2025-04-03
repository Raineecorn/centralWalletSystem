import crypto from 'crypto'; 
import auth from '../models/auth.js';

const key = Buffer.from('12345678901234567890123456789012', 'utf8');
const iv = Buffer.from('1234567890123456', 'utf8');

function encrypt(text) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}
// function decrypt(encryptedText) {
//   const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
//   let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
//   decrypted += decipher.final('utf8');
//   return decrypted;
// }

export default{
   encrypt
};
