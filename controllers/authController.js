const {User} = require('../models');
const {Sequelize} = require("sequelize");
const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;

exports.signUp = async (req, res) => {
  try {
    const { email, password, first_name, last_name, user_name } = req.body;
    const hashedPassword = await User.generatePassword(password)
    const user = await User.create({
      email,
      password:hashedPassword,
      first_name,
      last_name,
      user_name,
    });
    if (user) {
      res.status(204).json(user);
    } else {
      throw new Error('Data incorrect');
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne(
      {
        where: { email }
      }
    )
    if (!user) {
      throw new Error('Email or password is not correct')
    }
    const validated = await user.validatePassword(password);
    if (validated) {
      const token = jwt.sign({
        user_id: user.id,
      }, privateKey
      )
      res.status(201).json({ token });
    }
    else {
      throw new Error('Email or password is not correct');
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
