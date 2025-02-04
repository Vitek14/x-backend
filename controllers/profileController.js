const {User} = require('../models');
const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;

exports.getProfile = async (req, res, next) => {
  try {
    const token = req.headers['x-auth-token'];
    if (!token) {
      throw new Error('No token provided');
    }
    try {
      jwt.verify(token, privateKey);
    } catch {
      throw new Error('No token provided');
    }
    const decoded = jwt.decode(token);
    const user = await User.findByPk(decoded["user_id"]);
    res.json(user);
  }
  catch (err) {
    res.status(500).json({ error: err.message });
  }
}


