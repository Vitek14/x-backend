const express = require('express');
const { createLoginInfo, deleteLoginInfo } = require('../controllers/loginController');

const router = express.Router();

router.post('/', createLoginInfo);
router.delete('/', deleteLoginInfo);

module.exports = router;
