const express = require('express');
const { signUp, login } = require('../controllers/authController');

const router = express.Router();

router.post('/sign_up', signUp);
router.post('/login', login);

module.exports = router;
