const express = require('express');
const { getProfile } = require('../controllers/profileController');
const { getUsers, getMightLike, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.get('/might_like', getMightLike)
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
