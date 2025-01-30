const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const initializeDatabase = require('./models/index');
const {explorePost} = require("./controllers/postController");  // Import database initialization


const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/user_posts', postRoutes);
app.use('/api/explore', explorePost)

const PORT = process.env.PORT || 5000;

// Initialize the database and start server
initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
