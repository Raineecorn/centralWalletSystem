

const { USERNAME, PASSWORD } = process.env;

const verifyCredentials = (username, password) => {
  const encryptedPassword = cryptoService.encrypt(password)   
  return username === USERNAME && encryptedPassword === PASSWORD;
};

export default verifyCredentials; 
