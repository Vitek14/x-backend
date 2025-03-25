const express = require('express');
const { getProfile } = require('../controllers/profileController');
const { getUsers, getMightLike, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');
const {verifyToken} = require("../middlewares/authMiddleware");

const router = express.Router();

router.get('/', verifyToken, getUsers); // TODO: Disable this method for security reasons!!
router.get('/might_like', verifyToken, getMightLike)
router.get('/:id', verifyToken, getUser);
router.post('/', verifyToken, createUser);
router.patch('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
