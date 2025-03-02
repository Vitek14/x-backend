const express = require('express');
const { getUserNotifications, createNotification} = require('../controllers/notificationController');
const {verifyToken} = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, getUserNotifications);
router.post('/', verifyToken, createNotification);

module.exports = router;
