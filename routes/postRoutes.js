const express = require('express');
const { getPosts, createPost, updatePost, deletePost, likePost, unlikePost} = require('../controllers/postController');
const {verifyToken} = require("../middlewares/authMiddleware");

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.post('/like', verifyToken, likePost)
router.delete('/:post_id/unlike/:user_id', verifyToken, unlikePost);

module.exports = router;
