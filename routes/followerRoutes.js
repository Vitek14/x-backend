const express = require('express');
const { getFollowers, followUser } = require('../controllers/followerController');

const router = express.Router();

router.get('/:user_id', getFollowers);
router.post('/follow_user/:user_id', followUser);

module.exports = router;
