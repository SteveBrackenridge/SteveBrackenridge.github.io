// /backend/routes/articles.js
const router = require('express').Router();
const Article = require('../models/article');
const Image = require('../models/image');
const Video = require('../models/video');

// Create article
router.post('/add', async (req, res) => {
  const { title, content, userId, images, videos } = req.body;
  try {
    const newArticle = await Article.create({ title, content, UserId: userId });
    if (images) {
      images.forEach(async (imagePath) => {
        await Image.create({ path: imagePath, ArticleId: newArticle.id });
      });
    }
    if (videos) {
      videos.forEach(async (videoPath) => {
        await Video.create({ path: videoPath, ArticleId: newArticle.id });
      });
    }
    res.json(newArticle);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
