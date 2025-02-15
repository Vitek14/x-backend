const express = require('express');
const { getUserNotifications } = require('../controllers/notificationController');
const {verifyToken} = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, getUserNotifications);

module.exports = router;
