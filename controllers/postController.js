const {Post, User, Bookmark, Like} = require('../models');
const {Follower} = require('../models');
const {Op} = require("sequelize");
const sequelize = require('sequelize');
const jwt = require("jsonwebtoken");

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
    const token = req.headers['x-auth-token'];
    const privateKey = process.env.PRIVATE_KEY;
    if (!token) {
      throw new Error('No token provided');
    }
    try {
      jwt.verify(token, privateKey);
    } catch {
      throw new Error('No token provided');
    }
    const decoded = jwt.decode(token);
    const user = await User.findByPk(decoded["user_id"]);
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
        },
      ]
    });
    // const postsWithLikes = posts.map((post) =>({...post, is_liked:false}))

    // 4. Перемешиваем посты
    const shuffledPosts = posts.sort(() => 0.5 - Math.random());  // Сомнительно, нооо окей?

    // // 5. Обрезаем массив до 20 постов
    const limitedPosts = shuffledPosts.slice(0, 20);

    // Use 'Promise.all' to resolve likes before sending
    const postsWithLikes = await Promise.all(
      limitedPosts.map(async (post) => {
        const like = await Like.findOne({
          where: { post_id: post.id, user_id: user.id },
        });
        // is_liked is true if like is found, otherwise false
        return { ...post.toJSON(), is_liked: !!like };
      })
    );

    // Send the resolved array
    res.json(postsWithLikes);
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
