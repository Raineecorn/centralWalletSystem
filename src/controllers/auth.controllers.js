import statusCodes from '../config/statusCodes.js';
import authService from '../services/auth.services.js';

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const isAuthorized = await authService.verifyCredentials(username, password);

    if (isAuthorized) {
      return res.status(statusCodes.OK).json({
        message: 'Login successful',
        links: [
          { name: 'Dashboard', url: '/dashboard' },
          { name: 'Wallet', url: '/wallet' },
          { name: 'Logout', url: '/logout' }
        ]
      });
    } else {
      return res.status(statusCodes.UNAUTHORIZED).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Login failed' });
  }
};

export default login;
