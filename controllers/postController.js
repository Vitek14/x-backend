const Post = require('../models/post');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Post.update(req.body, { where: { id } });
    if (updated) {
      const updatedPost = await Post.findOne({ where: { id } });
      res.status(200).json(updatedPost);
    } else {
      throw new Error('User not found');
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      throw new Error('User not found');
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
