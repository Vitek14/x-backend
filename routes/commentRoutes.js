const express = require('express');
const {verifyToken} = require('../middlewares/authMiddleware');
const {createComment, updateComment, deleteComment} = require('../controllers/commentController');

const router = express.Router();

router.post('/', verifyToken, createComment);
router.patch('/:id', verifyToken, updateComment);
router.delete('/:id', verifyToken, deleteComment);

module.exports = router;
