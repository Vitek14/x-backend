const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const followerRoutes = require('./routes/followerRoutes');
const {explorePost, getHome} = require("./controllers/postController");
const {getFollowing} = require("./controllers/followerController");
const initializeDatabase = require('./models/index');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/user_posts', postRoutes);
app.use('/api/explore', explorePost)
app.use('/api/home', getHome)
app.use('/api/followers', followerRoutes)
app.use('/api/following/:user_id', getFollowing)

const PORT = process.env.PORT || 5000;

// Initialize the database and start server
initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
