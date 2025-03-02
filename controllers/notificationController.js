const { Notification, Post} = require('../models');

exports.getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll({
      where: {
        user_id: req.user.user_id // req.user благодаря middleware
      }
    });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createNotification = async (req, res) => {
  try {
    const notification = await Notification.create(req.body);
    res.status(201).json(notification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
