const {Post, User} = require('../models');
const {Follower} = require('../models');
const {Op} = require("sequelize");
const sequelize = require('sequelize');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHome = async (req, res) => {
  try {
    // 1. Получаем всех подписчиков для follower_id = 1
    const followers = await Follower.findAll({
      where: { follower_id: 1 }
    });

    // 2. Извлекаем following_id из полученных записей
    const followingIds = followers.map(follower => follower.following_id);

    // 3. Получаем все посты от пользователей, на которых подписан follower_id = 1
    const posts = await Post.findAll({
      where: {
        user_id: {
          [Op.in]: followingIds // Используем оператор IN для получения постов от всех following_id
        },
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: { exclude: ['password'] },
          required: false
        }
      ]
    });

    // 4. Перемешиваем посты
    const shuffledPosts = posts.sort(() => 0.5 - Math.random());  // Сомнительно, нооо окей?

    // // 5. Обрезаем массив до 20 постов
    const limitedPosts = shuffledPosts.slice(0, 20);

    // 6. Возвращаем результат
    res.json(limitedPosts);
    // res.json(posts);
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
