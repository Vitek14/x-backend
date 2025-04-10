const express = require('express');
const { getProfile } = require('../controllers/profileController');
const {verifyToken} = require("../middlewares/authMiddleware");

const router = express.Router();

router.get('/', verifyToken, getProfile);

module.exports = router;
