const {Login} = require("../models");

exports.createLoginInfo = async (req, res) => {
  try {
    const login_info = await Login.create(req.body);
    res.status(201).json(login_info);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

exports.deleteLoginInfo = async (req, res) => {
  try {
    const { createdAt, browser, ip } = req.body;

    const login_info = await Login.findOne({ where: { createdAt, browser, ip } });

    if (login_info) {
      await login_info.destroy();
      res.status(200).json({ message: 'Login info deleted successfully' });
    } else {
      res.status(404).json({ error: 'Login info not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
