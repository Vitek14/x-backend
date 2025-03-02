const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const followerRoutes = require('./routes/followerRoutes');
const authRoutes = require('./routes/authRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const loginInfoRoutes = require('./routes/loginRoutes');
const {explorePost, getHome} = require("./controllers/postController");
const {getFollowing} = require("./controllers/followerController");
const initializeDatabase = require('./models/index');
const cors = require("cors")
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Папка, куда будут сохраняться изображения
  },
  filename: (req, file, cb) => {
    // Генерируем уникальное имя файла (например, добавляя текущую дату)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Используем оригинальное расширение файла
  },
});

// Настройка multer для загрузки файлов
const upload = multer({ storage });

// Статические файлы (для доступа к загруженным изображениям по URL)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Эндпоинт для загрузки изображений
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  // Формируем URL для файла
  const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

  // Возвращаем URL клиенту
  res.json({ url: fileUrl });
});


app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/user_posts', postRoutes);
app.use('/api/explore', explorePost)
app.use('/api/home', getHome)
app.use('/api/followers', followerRoutes)
app.use('/api/following/:user_id', getFollowing)
app.use('/api', authRoutes)
app.use('/api/notifications', notificationRoutes)
app.use('/api/login_info', loginInfoRoutes)

const PORT = process.env.PORT || 5000;

// Initialize the database and start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
