const Post = require('../models/post');
const {Op} = require("sequelize");

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

exports.explorePost = async (req, res) => {
  try {
    // Получаем все посты, исключая посты с userId=1
    const posts = await Post.findAll({
      where: {
        user_id: {
          [Op.ne]: 1 // Исключаем системного пользователя
        }
      }
    });

    // Перемешиваем посты и выбираем 20 случайных
    const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 20);

    res.json(randomPosts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
