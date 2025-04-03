import crypto from 'crypto'; 

const key = Buffer.from(process.env.AES_SECRET_KEY, 'utf8');
const iv = Buffer.from(process.env.AES_IV, 'utf8');

function encrypt(text) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

export default{
   encrypt, 
   decrypt 
  };
