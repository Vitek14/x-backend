const {Comment, Post} = require("../models");

exports.createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    await Post.increment("comments_count", {
      where: {id: comment.post_id},
    })
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Comment.update(req.body, { where: { id } });
    if (updated) {
      const updatedPost = await Comment.findOne({ where: { id } });
      res.status(200).json(updatedPost);
    } else {
      throw new Error('Comment not found');
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id)
    const deleted = await Comment.destroy({ where: { id } });
    if (deleted) {
      await Post.decrement("comments_count", {
        where: {id: comment.post_id},
      })
      res.status(204).send();
    } else {
      throw new Error('Comment not found');
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
