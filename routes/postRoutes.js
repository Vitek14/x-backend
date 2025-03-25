const express = require('express');
const { getPosts, getPost, createPost, updatePost, deletePost, likePost, unlikePost} = require('../controllers/postController');
const {verifyToken} = require("../middlewares/authMiddleware");

const router = express.Router();

router.get('/', verifyToken, getPosts);
router.get('/:id', verifyToken, getPost)
router.post('/', verifyToken, createPost);
router.patch('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);
router.post('/like', verifyToken, likePost)
router.delete('/:post_id/unlike/:user_id', verifyToken, unlikePost);

module.exports = router;
