const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;

exports.verifyToken = async (req, res, next) => {
  const token = req.headers['x-auth-token'];
  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, privateKey);
    req.user = decoded;

    // Experimental!!!
    if (req.body.user_id) {
      if (req.body.user_id !== req.user.user_id) {
        return res.status(403).json({ error: 'User mismatch!' });
      }
    }


    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
