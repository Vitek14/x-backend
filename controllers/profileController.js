const User = require('../models/user');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(1);
    res.json(user);
  }
  catch (err) {
    res.status(500).json({ error: err.message });
  }
}


