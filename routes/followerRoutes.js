const express = require('express');
const { getFollowers, followUser } = require('../controllers/followerController');
const {verifyToken} = require("../middlewares/authMiddleware");

const router = express.Router();

router.get('/:user_id', verifyToken, getFollowers);
router.post('/follow_user/:user_id', verifyToken, followUser);

module.exports = router;
