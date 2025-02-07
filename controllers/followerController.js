const {Follower} = require('../models');

// Получить всех подписчиков пользователя
exports.getFollowers = async (req, res) => {
  const user_id = req.params.user_id;

  try {
    const followers = await Follower.findAll({
      where: {
        following_id: user_id // Получаем всех подписчиков, у которых following_id равен userId
      }
    });

    res.status(200).json(followers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Подписаться на пользователя
exports.followUser = async (req, res) => {
  const followingId = req.params.user_id;
  const followerId = 1;  // <-- SYSTEM USER ID
  const createdAt = new Date();

  try {
    const newFollower = await Follower.create({
      follower_id: followerId,
      following_id: followingId,
      created_at: createdAt
    });

    res.status(201).json(newFollower);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Получить пользователей, на которых подписан пользователь
exports.getFollowing = async (req, res) => {
  const user_id = req.params.user_id;

  try {
    const following = await Follower.findAll({
      where: {
        follower_id: user_id // Получаем всех пользователей, на которых подписан userId
      }
    });

    res.status(200).json(following);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
